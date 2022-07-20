let exp = require('express');
let app = exp();
let mongoose = require('mongoose');
let routes = require('./routes/inventory-routes');
const PORT = 8081;

app.use(exp.json());

app.use(errorHandler);

app.use(routes);

let mongoURI = "mongodb+srv://vbs145:Zq1jjE9GJbuh9B9E@mycluster.ytbwxbv.mongodb.net/inventory_db";
// try {
//     await mongoose.connect(mongoURI);
//     app.listen(PORT, () => console.log('server on ' + PORT));
// } catch (error) {
//     console.log(error);
// }
// mongoose.connect(mongoURI).then(result => {
//     app.listen(PORT, () => console.log('server on ' + PORT));
// }).catch(err => {
//     console.log(error);
// })

(async () => {
    try {
        await mongoose.connect(mongoURI);
        app.listen(PORT, () => console.log('server on ' + PORT));
    } catch (error) {
        console.log(error);
    }
})();

function errorHandler(err, req, resp, next) {
    console.log(err);
    resp.status(422).send({ errMessage: err.message, errDescription: err });
}

