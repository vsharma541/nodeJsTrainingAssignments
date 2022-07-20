let exp = require('express');
let app = exp();
let monguz = require('mongoose');
let orderRoutes = require('./routes/orders-routes');

app.use(exp.json());

app.use(orderRoutes);

let dbURI = 'mongodb+srv://vbs145:Zq1jjE9GJbuh9B9E@mycluster.ytbwxbv.mongodb.net/ordersservice';
monguz.connect(dbURI)
    .then((result) => {
        app.listen(5000, () => console.log('server on 5000'));
    })
    .catch((err) => console.log(err));

app.get('/', (req, resp) => {
    resp.send('orders page!');
});

var errorHandler = (err, req, resp, next) => {
    let errCode = err.code || 422;
    resp.status(errCode).send({ myerr: err.message, myerrdesc: err });
}
app.use(errorHandler);
