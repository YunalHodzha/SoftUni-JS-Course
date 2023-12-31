const router = require('express').Router();
const itemManager = require('../managers/itemManager');
const { extractErrorMessages } = require('../utils/errorHelpers');
const { getSelectedOption } = require('../utils/viewHelper');
const userManager = require('../managers/userManager');
const { isAuth } = require('../middleware/authMiddleware');

router.get('/catalog', async (req, res) => {

    try {

        const items = await itemManager.getAll();

        res.render('items/catalog', { items });
    } catch (err) {
        const errorMessage = extractErrorMessages(err);
        return res.render('items/catalog', { errorMessage });
    }

});

router.get('/create', isAuth, (req, res) => {
    res.render('items/create');
});

router.post('/create', async (req, res) => {
    const itemData = {
        ...req.body,
        owner: req.user._id
    };

    try {
        await itemManager.create(itemData);

    } catch (err) {
        const errorMessage = extractErrorMessages(err);
        return res.render('items/create', { errorMessage });
    }

    res.redirect('/items/catalog');
});

router.get('/details/:itemId', async (req, res) => {
    const itemId = req.params.itemId;
    const userId = req.user._id;
    const isUser = req.user?._id;

    try {
        const item = await itemManager.getItemDetailsById(itemId).lean();
        const ownerDetails = await userManager.findUserById(item.owner).lean();
        const ownerName = `${ownerDetails.firstName} ${ownerDetails.lastName}`;

        const votedUserEmails = item.votes.map((v) => v.email).join(', ');

        if (isUser) {
            const isOwner = req.user?._id == item.owner;
            const hasVoted = await itemManager.isAlreadyVoted(itemId, userId);

            res.render(`items/details`, { item, isOwner, isUser, ownerName, hasVoted, votedUserEmails });
        } else {
            res.render(`items/details`, { item, ownerName });
        }
    } catch (err) {
        res.redirect('/404');
    }
});

router.get('/details/:itemId/vote', async (req, res) => {
    const itemId = req.params.itemId;
    const user = req.user._id;

    try {
        await itemManager.vote(itemId, user);

        res.redirect(`/items/details/${itemId}`);
    } catch (err) {
        const errorMessage = extractErrorMessages(err);
        return res.redirect(`/items/details/${itemId}`, { errorMessage });
    }
});


router.get('/edit/:itemId', async (req, res) => {

    try {
        const item = await itemManager.getItemDetailsById(req.params.itemId).lean();

        const isOwner = req.user?._id == item.owner;

        //const options = getSelectedOption(item.platform);

        if (isOwner) {
            res.render('items/edit', { item });
        } else {
            throw new Error('Not Authorized!')
        }
    } catch (err) {
        const errorMessage = extractErrorMessages(err);
        res.redirect('/users/login', { errorMessage });
    };
});

router.post('/edit/:itemId', async (req, res) => {
    const itemId = req.params.itemId;

    try {
        const item = req.body;

        await itemManager.update(itemId, item);

        res.redirect(`/items/details/${itemId}`);
    } catch (err) {

        const errorMessage = extractErrorMessages(err);
        return res.render(`items/edit/${itemId}`, { errorMessage });

    }
});

router.get('/delete/:itemId', async (req, res) => {

    try {
        await itemManager.delete(req.params.itemId);

        res.redirect('/items/catalog');
    } catch (err) {
        const errorMessage = extractErrorMessages(err);
        res.render(`/items/${req.params.itemId}/details`, { errorMessage });
    }

});

module.exports = router;
