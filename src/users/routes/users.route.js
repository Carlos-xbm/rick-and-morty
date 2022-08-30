const router = require('express').Router();
const userController = require('../controllers/user.controller');


router.get('/', userController.findAllUserController);
router.post('/create', userController.createUserController);

module.exports = router;
