const mongoose = require('mongoose');


//TODO Look for the game requirements for item data
const itemSchema = new mongoose.Schema({
    headline: {
        type: String,
        required: [true, 'Headline is required!']
    },
    location: {
        type: String,
        required: [true, 'Location is required!']
    },
    companyName: {
        type: Number,
        required: [true, 'Company name is required!']
    },
    companyDescription: {
        type: String,
        required: [true, 'CompanyDescription is required!']
    },
    usersApplied: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;