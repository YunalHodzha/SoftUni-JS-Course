const Item = require('../models/Item');

exports.create = (itemData) => Item.create(itemData);

exports.getAll = () => Item.find();

exports.getItemDetailsById = (itemId) => Item.findById(itemId);