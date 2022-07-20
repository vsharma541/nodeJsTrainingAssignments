let monguz = require('mongoose');
let OrdersSchema = new monguz.Schema({
    CustomerId: {
        type: monguz.SchemaTypes.ObjectId,
        required: true
    },
    BookId: {
        type: monguz.SchemaTypes.ObjectId,
        required: true
    },
    initialDate: {
        type: Date,
        required: true
    },
    deliveryDate: {
        type: Date,
        required: true
    }
});

let Orders = monguz.model('order', OrdersSchema);
module.exports = Orders;