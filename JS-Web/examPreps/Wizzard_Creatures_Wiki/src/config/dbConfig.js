const mongoose = require('mongoose');


//TODO: change DB name for the current exam
const uri = 'mongodb://127.0.0.1:27017/wizzardCreatures';

async function dbConnect() {
    await mongoose.connect(uri);
}

module.exports = dbConnect;