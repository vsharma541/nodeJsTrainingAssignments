import exp from 'express';
import * as inventoryController from '../controller/inventory-controller';

let router = exp.Router();

router.get('/inventory', inventoryController.getAllItems);

router.post('/inventory', inventoryController.addItem);

router.get('/inventory/:item', inventoryController.getItem);

router.put('/inventory', inventoryController.updateInventory);

router.put('/inventory/:item', inventoryController.updateItem);

router.delete('/inventory', inventoryController.clearInventory);

router.delete('/inventory/:item', inventoryController.deleteItem);

export default router;