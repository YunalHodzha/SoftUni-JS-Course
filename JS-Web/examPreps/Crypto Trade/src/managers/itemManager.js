const Item = require('../models/Item');

exports.create = (itemData) => Item.create(itemData);

exports.getAll = () => Item.find();

exports.getItemDetailsById = (itemId) => Item.findById(itemId);

exports.update = (itemId, itemData) => Item.findByIdAndUpdate(itemId, itemData, { runValidators: true });

exports.delete = (itemID) => Item.findByIdAndDelete(itemID);

exports.buy = async (item, userId) => {

    item.boughtBy.push(userId);

    return item.save();
};

exports.isAlreadyBought = async (item, userId) => {

    const buyersList = Object.values(item.boughtBy);

    const isBought = buyersList.map(buyer => buyer.toString()).includes(userId);

    return isBought;
};

exports.search = async (search, payment) => {
    let result = await Item.find().lean();


    if (search) {
        result = result.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

        console.log(search);

    };

    if (payment) {
        result = result.filter(item => item.payment.toLowerCase().includes(payment.toLowerCase()));
    };

    return result;
};