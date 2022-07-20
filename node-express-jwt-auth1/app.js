const express = require('express');
const mongoose = require('mongoose');
let authRoutes = require('./routes/auth-routes');
let cookieParser = require('cookie-parser');
let validateCookie = require('./middleware/auth-middleware');
require('dotenv').config();

const app = express();

app.use(express.json());

// middleware
app.use(express.static('public'));

app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://vbs145:Zq1jjE9GJbuh9B9E@mycluster.ytbwxbv.mongodb.net/node-auth';
mongoose.connect(dbURI)
  .then((result) => {
    console.log('server running on 3000');
    app.listen(3000)
  })
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => {
  console.log(req.cookies);
  res.render('home')
});
app.get('/smoothies', [validateCookie, loggerFunc, loggerFunc1], (req, res) => res.render('smoothies'));

app.get('/set-cookies', (req, resp) => {
  let oneMin = 1000*60;
  resp.cookie('newUser', false);
  resp.cookie('isAuthed', true, {
    maxAge: oneMin,
    httpOnly: true
  })
  resp.send('cookies obtained!');
})

app.use(authRoutes);

app.use(errorHandler);

function errorHandler(err, req, resp, next) {
  if(err) {
    resp.status(422).send({myerr: err.name, myerrdesc: err});
  }
}

function loggerFunc(req, resp, next) {
  console.log('logger works!');
  next();
}

function loggerFunc1(req, resp, next) {
  console.log('logger1 works!');
  next()
}