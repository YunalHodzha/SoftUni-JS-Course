const mongoose = require('mongoose');


//TODO Look for the game requirements for item data
const itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required!']
    },
    author: {
        type: String,
        required: [true, 'Author is required!']
    },
    genre: {
        type: String,
        required: [true, 'Genre is required!']
    },
    stars: {
        type: Number,
        required: [true, 'Stars is required!'],
        min: [1, 'The number should be between 1 and 5'],
        max: [5, 'The number should be between 1 and 5']
    },
    image: {
        type: String,
        required: [true, 'Image is required!']
    },
    review: {
        type: String,
        required: [true, 'review is required!']
    },
    wishingList: [{
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