const router = require('express').Router();
const userManager = require('../managers/userManager');

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', async (req, res) => {
    const { username, email, password, repeatPassword } = req.body;

    try {
        await userManager.register({ username, email, password, repeatPassword });

        res.redirect('/users/login');
    } catch (err) {
        console.log(err);
    }
});

router.get('/logout', (req, res) => {
    res.redirect('/');
});



module.exports = router;