const bcrypt = require('bcrypt');

const User = require('../models/User');

exports.login = async (username, password) => {
    const user = await User.findOne({ username });


}

exports.register = (userData) => User.create(userData);