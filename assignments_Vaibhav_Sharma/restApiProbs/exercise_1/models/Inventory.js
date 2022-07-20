let mongoose = require('mongoose');
let inventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

let Inventory = mongoose.model('inventory', inventorySchema);
module.exports = Inventory;