const router = require('express').Router();
const controllerCharacters = require('../controllers/characters.controller');

router.get('/characters', controllerCharacters.findAllCharactersController);
router.get('/characters/find/:id', controllerCharacters.findByIdCharacterController);

module.exports = router;
