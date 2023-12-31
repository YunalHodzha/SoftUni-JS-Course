const Item = require('../models/Item');

exports.create = (itemData) => Item.create(itemData);

exports.getAll = async () => {

    let result = await Item.find().lean();

    // if (search) {
    //     result = result.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    // };

    // if (platform) {
    //     result = result.filter(item => item.platform.toLowerCase().includes(platform.toLowerCase()));
    // };

    return result;
}

exports.getItemDetailsById = (itemId) => Item.findById(itemId).populate('votes');

exports.update = (itemId, itemData) => Item.findByIdAndUpdate(itemId, itemData);

exports.delete = (itemID) => Item.findByIdAndDelete(itemID);

exports.isAlreadyVoted = async (itemId, userId) => {
    const item = await Item.findById(itemId).lean();
    const votes = Object.values(item.votes);
    const isVoted = votes.map(vote => vote.toString()).includes(userId);

    if (!item) {
        return res.status(404);
    }

    return isVoted;
};

exports.vote = async (itemId, user) => {
    const item = await Item.findById(itemId);

    if (!item) {
        return res.status(404);
    }

    item.votes.push(user);

    return item.save();
};

exports.getMyItems = (ownerId) => Item.find({owner: ownerId}).populate("owner");