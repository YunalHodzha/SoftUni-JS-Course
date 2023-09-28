const router = require('express').Router();
const userManager = require('../managers/userManager');
const { extractErrorMessages } = require('../utils/errorHelpers');

router.get('/login', (req, res) => {
    res.render('users/login');
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await userManager.login(email, password);

        res.cookie('auth', token, { httpOnly: true });
    } catch (err) {
        const errorMessage = extractErrorMessages(err);
        return res.render('users/login', { errorMessage });
    }

    res.redirect('/');
});

router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', async (req, res) => {
    const { username, email, password, repeatPassword } = req.body;

    try {
        await userManager.register(({ username, email, password, repeatPassword }));
    } catch (err) {
        const errorMessage = extractErrorMessages(err);

        return res.render('users/register', { errorMessage });
    }

    res.render('users/login');
});

router.get('/logout', (req, res) => {
    res.clearCookie('auth');

    res.redirect('/');
})

module.exports = router;