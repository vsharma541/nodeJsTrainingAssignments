let exp = require('express');
let router = exp.Router();
let ordersController = require('../controllers/orders-controller');

router.get('/orders', ordersController.getOrders);
router.get('/order/:id', ordersController.getOrderDetails);
router.post('/order', ordersController.createOrder);

module.exports = router;