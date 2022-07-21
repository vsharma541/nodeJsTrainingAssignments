const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routes');
const authenticateUser = require('./util/authenticator');

// for api security
const helmet = require('helmet');

app.use(helmet());

app.use(express.json());

app.use(authenticateUser);

app.use(routes);

app.get('/', routes);

app.listen(PORT, () => {console.log('server on port - ', PORT)});