var args = process.argv;
var port = Number(args[2]);
let exp = require('express');
let app = exp();
app.get('/home', (req, resp) => {
    resp.send(200, "Hello World!");
})
app.all('*', (req, resp) => {
    resp.send(404, "404 not found");
})
app.listen(port);