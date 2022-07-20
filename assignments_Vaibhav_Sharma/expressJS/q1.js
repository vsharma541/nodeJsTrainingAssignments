let exp = require('express');
let app = exp();
app.get('/', (req, resp) => {
    resp.send('Hello World!');
})
app.listen(3000);