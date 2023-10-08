const router = require('express').Router();
const itemManager = require('../managers/itemManager');

router.get('/', async (req, res) => {

    const items = await itemManager.getAll().lean();

    res.render('home/home', { items })
});


router.get('/search', (req, res) => {
    res.render('home/search')
});

module.exports = router;