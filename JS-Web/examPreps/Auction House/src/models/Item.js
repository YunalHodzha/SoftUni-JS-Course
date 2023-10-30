const mongoose = require('mongoose');


//TODO Look for the game requirements for item data
const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!']
    },
    image: {
        type: String,
        required: [true, 'Image is required!']
    },
    price: {
        type: Number,
        required: [true, 'Price is required!']
    },
    description: {
        type: String,
        required: [true, 'Description is required!']
    },
    genre: {
        type: String,
        required: [true, 'Genre is required!']
    },
    platform: {
        type: String,
        required: [true, 'Platform is required!']
    },
    boughtBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;