const itemManager = require('../managers/itemManager');
const { isAuth } = require('../middleware/authMiddleware');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home/home')
});

router.get('/search', isAuth, async (req, res) => {

    const { search, payment } = req.query;

    const items = await itemManager.search(search, payment);

    res.render('home/search', { items })
});

module.exports = router;