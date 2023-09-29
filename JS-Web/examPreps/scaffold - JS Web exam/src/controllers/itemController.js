const router = require('express').Router();
const itemManager = require('../managers/itemManager');
const { extractErrorMessages } = require('../utils/errorHelpers');

router.get('/create', (req, res) => {
    res.render('items/create');
});

router.post('/create', (req, res) => {
    
});

router.get('/details/', (req, res) => {

    res.render()
});

router.get('/edit', (req, res) => {

    res.render();
});

module.exports = router;
