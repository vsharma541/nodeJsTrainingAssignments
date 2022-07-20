var items = [
    {id: 1, name: 'laptop', price: 1000}, 
    {id: 2, name: 'phone', price: 100},
    {id: 3, name: 'earphone', price: 30}
]
var idCounter = 4;
let exp = require('express');
let app = exp();
app.set('view engine', 'ejs');
app.use(exp.urlencoded({extended: true}));
app.get('/items', (req, resp) => {
    resp.render('items', {data: items});
})
app.post('/items', (req, resp) => {
    let {itemName, itemPrice} = req.body;
    items.push({id: idCounter++, name: itemName, price: itemPrice});
    resp.render('items', {data: items});
})
app.get('/items/:id', (req, resp) => {
    let item = items.find(item => item.id === Number(req.params.id));
    if(!item) resp.send(404, 'item not found');
    resp.render('view-item', {data: item});
})
app.patch('/items/:id', (req, resp) => {
    let item = items.find(item => item.id === Number(req.params.id));
    if(!item) {
        resp.send(400, 'invalid id');    
    }
    let {name, price} = req.body;
    if(name) {
        item.name = name;
    }
    if(price) {
        item.price = price;
    }
    resp.render('view-item', {data: item});
});
app.delete('/items/:id', (req, resp) => {
    let delId = Number(req.params.id);
    items = items.filter(item => item.id !== delId);
    if(idCounter === delId) idCounter--;
    resp.render('items', {data: items});
})
app.listen(3000);