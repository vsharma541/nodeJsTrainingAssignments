let exp = require('express');
let app = exp();
let monguz = require('mongoose');
let routes = require('./routes/customers-routes');

app.use(exp.json());
app.use(routes);

// database connection
let dbURI = 'mongodb+srv://vbs145:Zq1jjE9GJbuh9B9E@mycluster.ytbwxbv.mongodb.net/customersservice';
monguz.connect(dbURI)
.then((result) => {
    app.listen(4000);
    console.log('server on 4000');
  })
  .catch((err) => console.log(err));


app.get('/', (req, resp) => {
    resp.send('hello customers')
})

var errorHandler = (err, req, resp, next) => {
  let errCode = err.code || 422;
  resp.status(errCode).send({myerr: err.message, myerrdesc: err});
}
app.use(errorHandler);

// app.listen(3000, () => console.log('server on 3000'))