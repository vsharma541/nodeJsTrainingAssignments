import {FakeDatabase} from '../models/FakeDatabase';
import Item from '../models/Item';
import {Request, Response, NextFunction} from 'express';
type ItemType = Item | null;

let fakeDB = new FakeDatabase();
let getAllItems = (req: Request, resp: Response) => {
    let items: ItemType[] = fakeDB.getInventory();
    if(!items || (items.length === 0)) {
        resp.status(404).send("inventory is empty");
        return;
    }
    // use of non-assertion operator:
    // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator
    items = items.map((item: ItemType) => {return {name: item!.name, quantity: item!.quantity}});
    resp.status(200).send(items);
}

let addItem = (req: Request, resp: Response) => {
    fakeDB.create(req.body);
    resp.status(200).send('Item added');
}

let getItem = (req: Request, resp: Response) => {
    let item: ItemType = fakeDB.findItem(req.params.item);
    if(!item) {
        resp.status(404).send("item not found");
        return;
    }
    item = {name: item.name, quantity: item.quantity};
    resp.status(200).send(item);
}

let updateInventory = (req: Request, resp: Response) => {
    let items: Item[] = req.body;
    console.log(items);
    fakeDB.updateInventoryDB(items);
    resp.status(200).send('Items updated');
}

let updateItem = (req: Request, resp: Response) => {
    console.log(req.params.item);
    let item: ItemType = fakeDB.findItemAndUpdate(req.params.item, req.body);
    console.log(item);
    if(!item) {
        resp.status(404).send('item not found');
        return;
    }
    resp.status(200).send('Item updates');
}

let clearInventory = (req: Request, resp: Response) => {
    fakeDB.clearInventoryDB();
    resp.status(200).send('all Items deleted');
    
}

let deleteItem = (req: Request, resp: Response) => {
    let item: ItemType = fakeDB.findOneAndDeleteItem(req.params.item);
    console.log(item);
    if(!item) {
        resp.status(404).send('item not found');
        return;
    }
    resp.status(200).send('Item removed');
}

export {getAllItems, addItem, getItem, updateInventory, updateItem, clearInventory, deleteItem}