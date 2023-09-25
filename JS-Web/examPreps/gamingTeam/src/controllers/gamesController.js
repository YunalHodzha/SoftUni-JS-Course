const router = require('express').Router();
const gameManager = require('../managers/gameManager');

router.get('/create', (req, res) => {
    res.render('games/create');
});

router.post('/create', async (req, res) => {
    const { platform, name, image, price, genre, description } = req.body;

    try {
        await gameManager.create({
            platform,
            name,
            image,
            price,
            genre,
            description,
            // owner: 'someId'
        });
        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.redirect('/');
    }
})

router.get('/details')

module.exports = router;
