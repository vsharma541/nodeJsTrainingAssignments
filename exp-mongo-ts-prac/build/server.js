"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config/config");
const author_routes_1 = __importDefault(require("./routes/author-routes"));
const app = (0, express_1.default)();
console.log(config_1.myConfig.mongo.url, process.env.MONGO_USERNAME);
app.get('/ping', (req, resp) => {
    resp.status(200).send({ message: 'pongg' });
});
mongoose_1.default.connect(config_1.myConfig.mongo.url)
    .then(res => {
    console.log('connnected to mongo db');
    app.listen(config_1.myConfig.server.port, () => console.log('server on ' + config_1.myConfig.server.port));
})
    .catch(err => console.log(err));
app.use(express_1.default.json());
app.use(author_routes_1.default);
