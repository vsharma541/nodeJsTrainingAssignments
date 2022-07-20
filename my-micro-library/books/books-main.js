let exp = require('express');
let app = exp();
let monguz = require('mongoose');
let routes = require('./routes/books-routes');

app.use(exp.json());
app.use(routes);

// database connection
let dbURI = 'mongodb+srv://vbs145:Zq1jjE9GJbuh9B9E@mycluster.ytbwxbv.mongodb.net/booksservice';
monguz.connect(dbURI)
.then((result) => {
    app.listen(3000);
    console.log('server on 3000');
  })
  .catch((err) => console.log(err));


app.get('/', (req, resp) => {
    resp.send('hello books')
})

var errorHandler = (err, req, resp, next) => {
  let errCode = err.code || 422;
  resp.status(errCode).send({myerr: err.message, myerrdesc: err});
}
app.use(errorHandler);

// app.listen(3000, () => console.log('server on 3000'))