const bcrypt = require('bcrypt');
const express = require('express');
const registry = require('../routes/registry.json');

const authenticateUser = async (req, resp, next) => {
    const authHeaders = req.headers['authorization'];
    // console.log(authHeaders);
    if(!authHeaders) {
        resp.status(400).send('invalid request, no auth headers');
        return;
    }
    const userCreds = Buffer.from(authHeaders, 'base64').toString('utf-8');
    console.log('user', userCreds);
    const username = userCreds.split(':')[0];
    const password = userCreds.split(':')[1];
    const salt = await bcrypt.genSalt(10);
    const storedUser = registry.auth.users[username];
    if(storedUser) {
        const isValidPassword = await bcrypt.compare(password, storedUser.password);
        if(isValidPassword) {
            next();
        }else {
            resp.status(401).send('username or password is invalid');
        }
    }else {
        resp.status(401).send('username does not exist');
    }
}

module.exports = authenticateUser;