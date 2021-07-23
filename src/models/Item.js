const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0 
    },
    stock: {
        type: Number,
        deault: 1
    },
    is_active: {
        type: Boolean,
        default: true
    }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = {
    Item
}