const route = require('express').Router();
const controllerCharacters = require('../controllers/characters.controller');
const { validId, validObjectBody } = require('../middlewares/character.middleware');

/* ROTAS CHARACTERS */
route.get('', controllerCharacters.findAllCharactersController);
route.get('/find/:id', validId, controllerCharacters.findByIdCharacterController);
route.post('/create', validObjectBody, controllerCharacters.createCharacterController);
route.put('/update/:id', validId, validObjectBody, controllerCharacters.updateCharacterController);
route.delete('/delete/:id', validId, controllerCharacters.deleteCharacterController);
route.get('/search', controllerCharacters.findByNameCharacterController);

module.exports = route;
