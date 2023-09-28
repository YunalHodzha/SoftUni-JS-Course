const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jwt');
const { SECRET } = require('../config/config');


exports.login = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Email is required!');
    }

    if (password === '') {
        throw new Error('Password is required');
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        throw new Error('Password is wrong!');
    }

    const payload = {
        _id: user._id,
        username: user.username
    };

    const token = await jwt.sign(payload, SECRET, { expiresIn: '2d' });

    return token;
};

exports.register = (userData) => User.create(userData);