const itemManager = require('../managers/itemManager');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home/home')
});

router.get('/search', async (req, res) => {

    const { search, payment } = req.query;

    console.log(search)

    const items = await itemManager.search(search, payment);

    res.render('home/search', { items })
});

module.exports = router;