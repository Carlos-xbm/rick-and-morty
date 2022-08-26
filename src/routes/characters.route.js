const route = require('express').Router();
const controllerCharacters = require('../controllers/characters.controller');

route.get('/characters', controllerCharacters.findAllCharactersController);
route.get('/characters/find/:id', controllerCharacters.findByIdCharacterController);
route.post('/characters/create', controllerCharacters.createCharacterController);
route.put('/characters/update/:id', controllerCharacters.updateCharacterController);
route.delete('/characters/delete/:id', controllerCharacters.deleteCharacterController);

module.exports = route;
