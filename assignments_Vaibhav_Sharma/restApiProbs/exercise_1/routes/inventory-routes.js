let exp = require('express');
let router = exp.Router();
let inventoryController = require('../controller/inventory-controller');

router.get('/inventory', inventoryController.getAllItems);

router.post('/inventory', inventoryController.addItem);

router.get('/inventory/:item', inventoryController.getItem);

router.put('/inventory', inventoryController.updateInventory);

router.put('/inventory/:item', inventoryController.updateItem);

router.delete('/inventory', inventoryController.clearInventory);

router.delete('/inventory/:item', inventoryController.deleteItem);

module.exports = router;