const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.get('/users', userController.createUserController);
router.post('/user/create', userController.findAllUserController);

module.exports = router;
