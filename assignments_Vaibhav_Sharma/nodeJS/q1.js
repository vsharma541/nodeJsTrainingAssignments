var http = require('http');
var server = http.createServer((req, resp) => {
    resp.end("Success, I am listening from port: 3000");
});
server.listen(3000, () => {
    console.log('server running on port 3000');
})