import IDatabase from "./IDatabase";
import Item from "./Item";
type ItemType = Item | null;
class FakeDatabase implements IDatabase {
    public inventory: Item[] = [];
    constructor() {
        this.inventory.push({name: "Apples", quantity: 23});
        this.inventory.push({name: "Mangoes", quantity: 12});
    }
    /**
     * 
     * @param itemName : The name of the item
     * @returns the item info based on its name
     */
    findItem(itemName: string): ItemType {
        let item: ItemType = null;
        for(let item1 of this.inventory) {
            if(item1.name === itemName) {
                item = item1;
            }
        }
        return item;
    }
    getInventory(): Item[] {
        return this.inventory;
    }
    create(item: Item): void {
        this.inventory.push(item);
    }
    findItemAndUpdate(itemName: string, item: Item): ItemType {
        let updatedItem: ItemType = null;
        for(let item1 of this.inventory) {
            if(item1.name === itemName) {
                item1 = item;
                updatedItem = item1;
            }
        }
        return updatedItem;
    }
    updateInventoryDB(items: Item[]): void {
        this.inventory = items;
    }
    findOneAndDeleteItem(itemName: string): ItemType {
        let deletedItem: ItemType = null;
        for(let item1 of this.inventory) {
            if(item1.name === itemName) {
                deletedItem = item1;
            }
        }
        this.inventory = this.inventory.filter(item => (item.name !== itemName));
        return deletedItem;
    }
    clearInventoryDB(): void {
        this.inventory = [];
    }
}

export {FakeDatabase};