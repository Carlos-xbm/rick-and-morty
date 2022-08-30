const router = require('express').Router();
const authRoute = require('../auth/auth.route');
const userController = require('../controllers/user.controller');

router.use('/auth', authRoute);

router.get('/users', userController.findAllUserController);
router.post('/user/create', userController.createUserController);

module.exports = router;
