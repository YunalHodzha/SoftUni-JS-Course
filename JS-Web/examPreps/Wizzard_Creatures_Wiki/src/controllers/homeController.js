const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home/home')
});

router.get('/search', (req, res) => {
    res.render('home/search')
});

module.exports = router;