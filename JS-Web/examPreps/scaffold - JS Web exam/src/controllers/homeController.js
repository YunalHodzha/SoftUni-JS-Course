const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home/home')
});

router.get('/catalog', (req, res) => {

    
    res.render('home/catalog')
});

router.get('/search', (req, res) => {
    res.render('home/search')
});

module.exports = router;