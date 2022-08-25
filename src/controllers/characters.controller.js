const charactersService = require('../services/characters.service');

const findAllCharactersController = (req, res) => {
  const characters = charactersService.findAllCharactersService();
  res.send(characters);
};

const findByIdCharacterController = (req, res) => {
  const idParam = req.params.id;
  const searchCharacter = charactersService.findByIdCharacterService(idParam);
  res.send(searchCharacter);
};

module.exports = {
  findAllCharactersController,
  findByIdCharacterController,
};
