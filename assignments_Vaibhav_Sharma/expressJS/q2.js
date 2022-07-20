let exp = require('express');
let app = exp();
app.use(exp.urlencoded({extended: false}));
app.get('/year', (req, resp) => {
    let {age} = req.query;
    let currentYr = new Date().getFullYear();
    let birthYr = Number(currentYr) - Number(age);
    resp.send(`Your were born in ${birthYr}`);
});
app.all('*', (req, resp) => {
    resp.send(404, '404 error')
})
app.listen(3000);