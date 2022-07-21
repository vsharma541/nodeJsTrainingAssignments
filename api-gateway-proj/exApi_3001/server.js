const express = require('express');
const app = express();
const HOST = "localhost";
const PROTOCOL = 'http';
const PORT = 3001;
const axios = require('axios');
const API_NAME = "regApi";

app.use(express.json());

app.get('/exApi1', (req, resp) => {
    resp.status(200).send('hello from exApi1');
});

app.get('/exApi2', (req, resp) => {
    resp.status(200).send('hello from exApi2');
});

app.post('/exApi3', (req, resp) => {
    console.log(req.body);
    resp.status(200).send(req.body);
});

app.listen(PORT, () => {
    addApiToGateway();
    console.log('exApi1 server on port - ', PORT)
});

function addApiToGateway() {
    let userDetails = "john:password123";
    userDetails = Buffer.from(userDetails, 'utf-8').toString('base64');
    axios({
        method: "POST",
        headers: {"Content-Type": "application/json", "authorization": userDetails},
        data: {
            host: HOST,
            protocol: PROTOCOL,
            apiName: API_NAME,
            port: PORT
        },
        url: "http://localhost:3000/register"
    }).then(resp => {
        console.log(resp.data);
    }).catch(err => {
        console.log(err);
    })
}