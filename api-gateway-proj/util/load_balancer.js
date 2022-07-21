const LoadBalancer = {};

LoadBalancer.ROUND_ROBIN = (serviceApi) => {
    return findEnabledInstanceIdx(serviceApi, serviceApi.index, 0);
}

function findEnabledInstanceIdx(serviceApi, index, flag) {
    if(flag >= serviceApi.instances.length) {
        return -1;
    }
    let newIndex = index + 1;
    if(newIndex >= serviceApi.instances.length) {
        newIndex = 0;
    }
    serviceApi.index = newIndex;
    if(serviceApi.instances[newIndex].enabled) {
        return newIndex;
    }else {
        return findEnabledInstanceIdx(serviceApi, newIndex, flag+1);
    }
}

module.exports = LoadBalancer;