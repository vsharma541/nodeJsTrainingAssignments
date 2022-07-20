let args = process.argv;
let port = Number(args[2]);
let exp = require('express');
let path = require('path');
let app = exp();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'templates'));
app.get('/home', (req, resp) => {
    let date = new Date().toTimeString();
    resp.render('index', {date})
})
app.listen(port);