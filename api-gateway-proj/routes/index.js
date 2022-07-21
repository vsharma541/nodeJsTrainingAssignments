const express = require('express');
let router = express.Router();
let axios = require('axios');
let registry = require('./registry.json');
const fs = require('fs');
const path = require('path');
const loadBalancer = require('../util/load_balancer');
const regFile = path.join(__dirname, 'registry.json');

router.post('/:apiName/enable', (req, resp) => {
    const isEnabled = req.body.enabled;
    const apiName = req.params.apiName;
    const serviceApi = registry.services[apiName];
    const url = req.body.url;
    if(serviceApi && isApiExists(serviceApi, url)) {
        serviceApi.instances.map(service => {
            if(service.url === url) {
                service.enabled = isEnabled;
            }
            // console.log(service);
        });
        registry.services[apiName] = serviceApi;
        // console.log(registry.services[apiName]);
        fs.writeFile(regFile, JSON.stringify(registry), (err, data) => {
            if(err) {
                resp.status(422).send('some issue with writing file for enabling url - ' + url)
            }else {
                resp.status(200).send('successfuly enabled/disabled url - ' + url);
            }
        })
    }else {
        resp.status(404).send('can not find url - ' + url);
    }

})

// to load api service which consists of apiName and path like:
// http://localhost:3000/regApi/exApi1
router.all('/:apiName/:path', (req, resp) => {
    const apiName = req.params.apiName;
    // const baseUrl = "http://localhost:3001/";
    const urlPath = req.params.path;

    let serviceApi = registry.services[apiName];
    if(serviceApi) {
        const strategy = serviceApi.LoadBalancerStrategy ? serviceApi.LoadBalancerStrategy : "ROUND_ROBIN";
        const index = loadBalancer[strategy](serviceApi);
        if(index === -1) {
            resp.status(404).send('no url enabled');
            return;
        }
        const instanceUrl = serviceApi.instances[index].url;
        // axios.get(baseUrl + urlPath).then(response => {
        //     // console.log(response);
        //     resp.status(200).send(response.data);
        // }).catch(err => {
        //     resp.status(422).send(err);
        // })

        let params = {
            method: req.method,
            // url: (baseUrl + urlPath),
            url: (instanceUrl + urlPath),
            data: (req.method === "POST" ? req.body : null)
        }

        console.log('url loading: ', params.url);
        axios(params).then(response => {
            // console.log(response);
            resp.status(200).send(response.data);
        }).catch(err => {
            resp.status(422).send(err);
        })
    }else {
        resp.status(404).send('api name does not exist');
    }
});

// to add new api service to registry
// registry here refers to registry.json file
router.post('/register', (req, resp) => {
    const regInfo = req.body;
    const {protocol, host, port} = {...regInfo};
    const url = protocol + '://' + host + ':' + port + '/';
    regInfo.url = url;
    
    if(!registry.services[regInfo.apiName]) {
        registry.services[regInfo.apiName] = {
            index: 0,
            LoadBalancerStrategy: "ROUND_ROBIN",
            instances: []
        };
    }
    if(isApiExists(registry.services[regInfo.apiName], url)) {
        resp.status(200).send('already exists url - ' + url);
        return;
    }
    registry.services[regInfo.apiName].instances.push(regInfo);
    // console.log(registry);
    fs.writeFile(regFile, JSON.stringify(registry), (err, data) => {
        if(err) {
            resp.status(422).send('some issue with writing file for registering url - ' + url);
        }else {
            resp.status(200).send('successfuly registerd url - ' + url);
        }
    })
})

// to remove api service from registry
router.post('/unregister', (req, resp) => {
    const regInfo = req.body;
    const {protocol, host, port} = {...regInfo};
    const url = protocol + '://' + host + ':' + port + '/';
    regInfo.url = url;
    
    if(!isApiExists(registry.services[regInfo.apiName], url)) {
        resp.status(200).send('unreg failed, can not find url - ' + url);
        return;
    }
    let regServiceInstances = registry.services[regInfo.apiName].instances;
    regServiceInstances = regServiceInstances.filter(service => service.url !== url);
    registry.services[regInfo.apiName].instances = regServiceInstances;
    // console.log(registry);
    const regFile = path.join(__dirname, 'registry.json');
    fs.writeFile(regFile, JSON.stringify(registry), (err, data) => {
        if(err) {
            resp.status(422).send('some issue with writing file for unregistering url - ' + url);
        }else {
            resp.status(200).send('successfuly unregisterd url - ' + url);
        }
    })
})

// to check if api url already exists in registry
function isApiExists(registryApiService, url) {
    let exists = false;
    registryApiService.instances.forEach(service => {
        // console.log(service, url);
        if(service.url === url) {
            exists = true;
        }
    });
    return exists;
}

module.exports = router;