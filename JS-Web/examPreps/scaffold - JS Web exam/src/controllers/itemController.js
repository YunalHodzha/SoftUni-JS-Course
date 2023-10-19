const router = require('express').Router();
const itemManager = require('../managers/itemManager');
const { isAuth } = require('../middleware/authMiddleware');
const { extractErrorMessages } = require('../utils/errorHelpers');
const { getSelectedOption } = require('../utils/viewHelper');

router.get('/catalog', async (req, res) => {

    try {
        const items = await itemManager.getAll().lean();

        res.render('items/catalog', { items });
    } catch (err) {
        console.log(err);
        res.redirect('/404');
    }
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
    const userId = req.user?._id;

    try {
        const item = await itemManager.getItemDetailsById(itemId).lean();

        const isOwner = userId == item.owner;

        //const isAlreadyBought = await itemManager.isAlreadyBought(item, userId);

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

router.post('/edit/:itemId', isAuth, async (req, res) => {
    const itemId = req.params.itemId;

    try {
        const item = req.body;

        await itemManager.update(itemId, item);

        res.redirect(`/items/details/${itemId}`);
    } catch (err) {

        const item = await itemManager.getItemDetailsById(req.params.itemId).lean();
        //const options = getSelectedOption(item.payment);
        const errorMessage = extractErrorMessages(err);
        return res.render(`items/edit/${itemId}`, { errorMessage });

    }
});

router.get('/edit/:itemId/delete', isAuth, async (req, res) => {

    try {
        await itemManager.delete(req.params.itemId);

        res.redirect('/items/catalog');
    } catch (err) {
        res.redirect(`/404`, { error: 'Unsuccessful item deletion' });
    }

});

//TODO Buy Option
// router.get('/details/:itemId/buy', isAuth, async (req, res) => {
//     const itemId = req.params.itemId;
//     const userId = req.user._id;

//     try {
//         const item = await itemManager.getItemDetailsById(itemId);

//         await itemManager.buy(item, userId);

//         res.redirect(`/items/details/${itemId}`);
//     } catch (err) {
//         console.log(err);
//         res.redirect(`404`);
//     }
// });

module.exports = router;
