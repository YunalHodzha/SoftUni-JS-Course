const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('items/create');
});

router.get('/details/', (req, res) => {

    res.render()
});

router.get('/edit', (req, res) => {

    res.render();
});

module.exports = router;
