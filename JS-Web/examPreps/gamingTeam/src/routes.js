const router = require('express').Router();
const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');
const itemController = require('./controllers/itemController');

router.use('/', homeController);
router.use('/home', homeController);
router.use('/users', userController);
router.use('/items', itemController);


module.exports = router;