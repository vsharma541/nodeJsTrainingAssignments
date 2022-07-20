let Inventory = require('../models/Inventory');

let getAllItems = async (req, resp, next) => {
    try {
        let items = await Inventory.find();
        if(!items || (items.length === 0)) {
            resp.status(404).send("inventory is empty");
            return;
        }
        items = items.map(item => {return {name: item.name, quantity: item.quantity}});
        resp.status(200).send(items);
    } catch (error) {
        next(error);
    }
}

let addItem = async (req, resp, next) => {
    try {
        let item = await Inventory.create(req.body);
        resp.status(200).send('Item added: \n' + item);
    } catch (error) {
        next(error);
    }
}

let getItem = async (req, resp, next) => {
    try {
        let item = await Inventory.findOne({name: req.params.item});
        if(!item) {
            resp.status(404).send("item not found");
            return;
        }
        item = {name: item.name, quantity: item.quantity};
        resp.status(200).send(item);
    } catch (error) {
        next(error);
    }
}

let updateInventory = async (req, resp, next) => {
    try {
        await Inventory.deleteMany();
        let items = req.body;
        console.log(items);
        items.forEach(async (item) => {
            await Inventory.create(item);
        })
        resp.status(200).send('Items updated');
    } catch (error) {
        next(error);
    }
}

let updateItem = async (req, resp, next) => {
    try {
        console.log(req.params.item);
        let item = await Inventory.findOneAndUpdate({name: req.params.item}, req.body);
        console.log(item);
        if(!item) {
            resp.status(404).send('item not found');
            return;
        }
        resp.status(200).send('Item updates');
    } catch (error) {
        next(error);
    }
}

let clearInventory = async (req, resp, next) => {
    try {
        await Inventory.deleteMany();
        resp.status(200).send('all Items deleted');
    } catch (error) {
        next(error);
    }
}

let deleteItem = async (req, resp, next) => {
    try {
        let item = await Inventory.findOneAndRemove({name: req.params.item});
        console.log(item);
        if(!item) {
            resp.status(404).send('item not found');
            return;
        }
        resp.status(200).send('Item removed');
    } catch (error) {
        next(error);
    }
}

module.exports = {getAllItems, addItem, getItem, updateInventory, updateItem, clearInventory, deleteItem}