"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.clearInventory = exports.updateItem = exports.updateInventory = exports.getItem = exports.addItem = exports.getAllItems = void 0;
const FakeDatabase_1 = require("../models/FakeDatabase");
let fakeDB = new FakeDatabase_1.FakeDatabase();
let getAllItems = (req, resp) => {
    let items = fakeDB.getInventory();
    if (!items || (items.length === 0)) {
        resp.status(404).send("inventory is empty");
        return;
    }
    // use of non-assertion operator:
    // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator
    items = items.map((item) => { return { name: item.name, quantity: item.quantity }; });
    resp.status(200).send(items);
};
exports.getAllItems = getAllItems;
let addItem = (req, resp) => {
    fakeDB.create(req.body);
    resp.status(200).send('Item added');
};
exports.addItem = addItem;
let getItem = (req, resp) => {
    let item = fakeDB.findItem(req.params.item);
    if (!item) {
        resp.status(404).send("item not found");
        return;
    }
    item = { name: item.name, quantity: item.quantity };
    resp.status(200).send(item);
};
exports.getItem = getItem;
let updateInventory = (req, resp) => {
    let items = req.body;
    console.log(items);
    fakeDB.updateInventoryDB(items);
    resp.status(200).send('Items updated');
};
exports.updateInventory = updateInventory;
let updateItem = (req, resp) => {
    console.log(req.params.item);
    let item = fakeDB.findItemAndUpdate(req.params.item, req.body);
    console.log(item);
    if (!item) {
        resp.status(404).send('item not found');
        return;
    }
    resp.status(200).send('Item updates');
};
exports.updateItem = updateItem;
let clearInventory = (req, resp) => {
    fakeDB.clearInventoryDB();
    resp.status(200).send('all Items deleted');
};
exports.clearInventory = clearInventory;
let deleteItem = (req, resp) => {
    let item = fakeDB.findOneAndDeleteItem(req.params.item);
    console.log(item);
    if (!item) {
        resp.status(404).send('item not found');
        return;
    }
    resp.status(200).send('Item removed');
};
exports.deleteItem = deleteItem;
