"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeDatabase = void 0;
class FakeDatabase {
    constructor() {
        this.inventory = [];
        this.inventory.push({ name: "Apples", quantity: 23 });
        this.inventory.push({ name: "Mangoes", quantity: 12 });
    }
    /**
     *
     * @param itemName : The name of the item
     * @returns the item info based on its name
     */
    findItem(itemName) {
        let item = null;
        for (let item1 of this.inventory) {
            if (item1.name === itemName) {
                item = item1;
            }
        }
        return item;
    }
    getInventory() {
        return this.inventory;
    }
    create(item) {
        this.inventory.push(item);
    }
    findItemAndUpdate(itemName, item) {
        let updatedItem = null;
        for (let item1 of this.inventory) {
            if (item1.name === itemName) {
                item1 = item;
                updatedItem = item1;
            }
        }
        return updatedItem;
    }
    updateInventoryDB(items) {
        this.inventory = items;
    }
    findOneAndDeleteItem(itemName) {
        let deletedItem = null;
        for (let item1 of this.inventory) {
            if (item1.name === itemName) {
                deletedItem = item1;
            }
        }
        this.inventory = this.inventory.filter(item => (item.name !== itemName));
        return deletedItem;
    }
    clearInventoryDB() {
        this.inventory = [];
    }
}
exports.FakeDatabase = FakeDatabase;
