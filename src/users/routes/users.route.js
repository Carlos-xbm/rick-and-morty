const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.get('/users', userController.findAllUserController);
router.post('/user/create', userController.createUserController);

module.exports = router;
