const mongoose = require('mongoose');


//TODO Look for the game requirements for item data
const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [2, 'Name must be atleast 2 characters long!'],
        required: [true, 'Name is required!']
    },
    years: {
        type: Number,
        min: [1, 'Age must be at least 1'],
        max: [100, 'Age must be at most 100'],
        required: [true, 'Years is required!']
    },
    kind: {
        type: Number,
        minlength: [3, 'Name must be atleast 3 characters long!'],
        required: [true, 'Kind is required!']
    },
    image: {
        type: String,
        required: [true, 'Image is required!']
    },
    need: {
        type: String,
        min: [3, 'Need at least 3 characters!'],
        max: [20, 'Need must be no longer than 20 characters!'],
        required: [true, 'Need is required!']
    },
    location: {
        type: String,
        min: [5, 'Location must be at least 5 characters!'],
        max: [50, 'Location must be no longer than 50 characters!'],
        required: [true, 'Location is required!']
    },
    description: {
        type: String,
        min: [5, 'Description must be at least 5 characters long!'],
        max: [50, 'Description must be no longer than 50 characters!'],
        required: [true, 'Description is required!']
    },
    donations: [{
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