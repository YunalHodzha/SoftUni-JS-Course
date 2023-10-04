const mongoose = require('mongoose');


//TODO Look for the game requirements for item data
const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!']
    },
    species: {
        type: String,
        required: [true, 'Specie is required!']
    },
    skinColor: {
        type: String,
        required: [true, 'Skin color is required!']
    },
    eyeColor: {
        type: String,
        required: [true, 'Eye color is required!']
    },
    image: {
        type: String,
        required: [true, 'Image is required!']
    },
    description: {
        type: String,
        required: [true, 'Description is required!']
    },
    votes: [{
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