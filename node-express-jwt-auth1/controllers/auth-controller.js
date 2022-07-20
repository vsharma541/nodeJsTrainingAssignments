let User = require('../models/User');
let jwt = require('jsonwebtoken');
let bcrypt = require('bcrypt');

let signup_get = (req, resp) => {
    resp.render('signup');
}

let MAX_AGE = 30*60;
let createToken = async (id) => {
    let token = await jwt.sign({id}, process.env.JWT_SECRET_KEY, {
        expiresIn: MAX_AGE
    });
    return token;   
}

function login_get(req, resp) {
    resp.render('login');
}

async function signup_post(req, resp, next) {
    try {
        let user = await User.create(req.body);
        let token = await createToken(user._id);
        resp.cookie('jwt', token, {
            maxAge: MAX_AGE*1000,
            httpOnly: true
        });        
        resp.status(201).send(user);
    } catch (error) {
        next(error);
    }
}

async function login_post(req, resp, next) {
    try {
        let {email, password} = req.body;
        let user = await User.findOne({email});
        if(!user) {
            resp.status(400).send('user not exist');
            return;
        }
        let isValidUser = await bcrypt.compare(password, user.password);
        if(!isValidUser) {
            resp.status(400).send('credentials are not correct');
            return;
        }
        let token = await createToken(user._id);
        resp.cookie('jwt', token, {
            maxAge: MAX_AGE*1000,
            httpOnly: true
        })
        resp.status(200).send('login success');
    } catch (error) {
        next(error);
    }
}

var logout_get = (req, resp) => {
    resp.cookie('jwt', '', {maxAge: 1});
    console.log('loout');
    resp.redirect('/');
}

module.exports = {signup_get, signup_post, login_get, login_post, logout_get};