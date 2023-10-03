const router = require('express').Router();
const itemManager = require('../managers/itemManager');

router.get('/', (req, res) => {
    res.render('home/home')
});

router.get('/search', async (req, res) => {

    const { search, platform } = req.query;

    const items = await itemManager.getAll(search, platform);

    res.render('home/search', { items });
});

module.exports = router;