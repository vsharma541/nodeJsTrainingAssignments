let exp = require('express');
let router = exp.Router();
let customersController = require('../controller/customers-controller');

router.get('/customers', customersController.customers_get);
router.get('/customer/:id', customersController.get_customer_by_id);
router.get('/customer/:id/:name', customersController.get_customer);
router.post('/customer', customersController.customers_post);
router.delete('/customer/:id', customersController.delete_customer);

module.exports = router;