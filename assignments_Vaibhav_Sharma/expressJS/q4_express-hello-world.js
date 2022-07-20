var port = process.env.PORT || 8080;
var exp = require('express');
var app = exp();
app.get('/', (req, resp) => {
    resp.send(200, "Hello World");
})
app.get('/time', (req, resp) => {
    let currTime = new Date().toISOString();
    resp.send(200, currTime);
});
app.all('*', (req, resp) => {
    resp.send(404, "404 not found");
})
app.listen(port, () => {
    console.log('listening on port', port);
});