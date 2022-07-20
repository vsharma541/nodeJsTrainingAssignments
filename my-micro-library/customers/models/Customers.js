let monguz = require('mongoose');
let CustomersSchema = new monguz.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String
    }
});
let customers = monguz.model('customer', CustomersSchema);
module.exports = customers;