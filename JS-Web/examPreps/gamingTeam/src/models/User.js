const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'Username is required!'],
        minlength: [5, 'Username must be atleast 5 characters long!'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required!'],
        minlength: [10, 'Email must be atleast 10 characters long!'],
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'Password if required'],
        minlength: [4, 'Password must be atleast 4 characters long!'],
        trim: true,
    },
});


userSchema.virtual('repeatPassword')
    .set(function (value) {
        if (value !== this.password) {
            throw new Error('Password missmatch!')
        }
    });

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
});

const User = mongoose.model('User', userSchema);

module.exports = User;