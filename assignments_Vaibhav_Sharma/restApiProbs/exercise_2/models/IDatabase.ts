import Item from './Item';
type ItemType = Item | null;

export default interface IDatabase {
    findItem(itemName: string): ItemType,
    getInventory(): Item[],
    create(item: Item): void,
    updateInventoryDB(items: Item[]): void,
    findItemAndUpdate(itemName: string, item: Item): ItemType,
    clearInventoryDB(): void,
    findOneAndDeleteItem(itemName: string): ItemType
}
