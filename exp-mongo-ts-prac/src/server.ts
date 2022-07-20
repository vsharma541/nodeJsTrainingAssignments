import express from 'express';
import mongoose from 'mongoose';
import { myConfig } from './config/config';
import author_routes from './routes/author-routes';

const app = express();
console.log(myConfig.mongo.url, process.env.MONGO_USERNAME)
app.get('/ping', (req, resp) => {
    resp.status(200).send({message: 'pongg'});
})
mongoose.connect(myConfig.mongo.url)
    .then(res => {
        console.log('connnected to mongo db')
        app.listen(myConfig.server.port, () => console.log('server on ' + myConfig.server.port));
    })
    .catch(err => console.log(err));

app.use(express.json());
app.use(author_routes);
