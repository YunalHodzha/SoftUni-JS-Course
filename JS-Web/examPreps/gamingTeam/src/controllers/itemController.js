const router = require('express').Router();
const itemManager = require('../managers/itemManager');
const { extractErrorMessages } = require('../utils/errorHelpers');
const { getSelectedOption } = require('../utils/viewHelper');

router.get('/catalog', async (req, res) => {

    const items = await itemManager.getAll().lean();

    res.render('items/catalog', { items });
});

router.get('/create', (req, res) => {
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


    try {
        const item = await itemManager.getItemDetailsById(itemId).lean();

        const isOwner = req.user?._id == item.owner;

        res.render('items/details', { item, isOwner });
    } catch (err) {
        res.redirect('/404');
    }
});

router.get('/edit/:itemId', async (req, res) => {

    try {
        const item = await itemManager.getItemDetailsById(req.params.itemId).lean();

        const isOwner = req.user?._id == item.owner;

        const options = getSelectedOption(item.platform);

        if (isOwner) {
            res.render('items/edit', { item, options });
        } else {
            throw new Error('Not Authorized!')
        }
    } catch (err) {
        console.log(err)
        res.redirect('/users/login');
    };
});

router.post('/edit/:itemId', async (req, res) => {
    const itemId = req.params.itemId;
    console.log(itemId);
    try {
        const item = req.body;

        await itemManager.update(itemId, item);

        res.redirect(`/items/details/${itemId}`);
    } catch (err) {

        const errorMessage = extractErrorMessages(err);
        return res.render(`items/edit/${itemId}`, { errorMessage });

    }
});

router.get('/edit/:itemId/delete', async (req, res) => {

    try {
        await itemManager.delete(req.params.itemId);

        res.redirect('/items/catalog');
    } catch (err) {
        res.render(`/items/${req.params.itemId}/details`, { error: 'Unsuccessful item deletion' });
    }

});

module.exports = router;
