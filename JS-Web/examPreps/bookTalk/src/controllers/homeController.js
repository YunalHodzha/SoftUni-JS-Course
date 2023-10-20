const router = require('express').Router();
const { isAuth } = require('../middleware/authMiddleware');

router.get('/', (req, res) => {
    res.render('home/home')
});

// router.get('/search', isAuth, async (req, res) => {

//     //TODO 
//     const { search, payment } = req.query;

//     const items = await itemManager.search(search, payment);

//     res.render('home/search', { items })
// });

module.exports = router;