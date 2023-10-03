const Item = require('../models/Item');

exports.create = (itemData) => Item.create(itemData);

exports.getAll = async (search, platform) => {
    let result = await Item.find().lean();

    if (search) {
        result = result.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    };

    if (platform) {
        result = result.filter(item => item.platform.toLowerCase().includes(platform.toLowerCase()));
    };

    return result;
}

exports.getItemDetailsById = (itemId) => Item.findById(itemId);

exports.update = (itemId, itemData) => Item.findByIdAndUpdate(itemId, itemData);

exports.delete = (itemId) => Item.findByIdAndDelete(itemId);

exports.isAlreadyBought = async (itemId, userId) => {
    const item = await Item.findById(itemId);

    if (!item) {
        return res.status(404);
    }
    const isBought = item.boughtBy.includes(userId);
    return isBought;
};

exports.buy = async (itemId, userId) => {
    const item = await Item.findById(itemId);

    if (!item) {
        return res.status(404);
    }

    item.boughtBy.push(userId);

    await item.save();
}
