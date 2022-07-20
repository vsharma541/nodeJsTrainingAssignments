let exp = require('express');
let app = exp();
app.use(exp.urlencoded({extended: true}));
app.use(exp.static('./public'));
app.get('/', (req, resp) => {
    resp.send();
})
app.all('*', (req, resp) => {
    resp.send(404, "404 not found");
})
app.listen(3000);