const router = require('express').Router();
const userManager = require('../managers/userManager');
const itemManager = require('../managers/itemManager');
const { extractErrorMessages } = require('../utils/errorHelpers');
const { isAuth } = require('../middleware/authMiddleware');

router.get('/login', (req, res) => {
    res.render('users/login');
});

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

    const firstName = req.body['first-name'];
    const lastName = req.body['last-name'];
    const email = req.body.email;
    const password = req.body.password;
    const repeatPassword = req.body['repeat-password'];


    console.log(req.body['first-name'])
    try {
        await userManager.register({ firstName, lastName, email, password, repeatPassword });

        res.redirect('/users/login');
    } catch (err) {
        const errorMessage = extractErrorMessages(err);
        console.log(errorMessage)
        res.redirect('users/register', { errorMessage });
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie('auth');

    res.redirect('/');
});

//Render Profile
router.get('/my-posts', isAuth, async (req, res) => {
    const { user } = req;

    const myItems = await itemManager.getMyItems(user?._id).lean();

    res.render('users/my-posts', { myItems });
});

module.exports = router;