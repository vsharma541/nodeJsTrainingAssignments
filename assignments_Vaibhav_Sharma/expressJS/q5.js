let exp = require('express');
let app = exp();
app.use(exp.urlencoded({extended: true}));
app.post('/form', (req, resp) => {
    console.log(req.body);
    let {str} = req.body;
    let str1 = '';
    let i = str.length-1;
    while(i >= 0) {
        str1 += str[i--];
    }
    resp.send(200, str1);
})
app.all('*', (req, resp) => {
    resp.send(404, "404 not found");
})
app.listen(3000);