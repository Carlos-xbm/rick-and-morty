const charactersService = require('../services/characters.service');

/* GET_ALL */
const findAllCharactersController = (req, res) => {
  const characters = charactersService.findAllCharactersService();

  if (characters.length == 0) {
    return res.status(404).send({ message: 'Não existe nenhum character cadastrado' });
  }

  res.send(characters);
};

/* GET_BY_ID */
const findByIdCharacterController = (req, res) => {
  const idParam = +req.params.id;

  if (!idParam) {
    return res.status(400).send({ message: 'Id invalido' });
  }

  const searchCharacter = charactersService.findByIdCharacterService(idParam);

  if (!searchCharacter) {
    return res.status(404).send({ message: 'Character não existe' });
  }

  res.send(searchCharacter);
};

/* CREATE */
const createCharacterController = (req, res) => {
  const character = req.body;

  if (!character || !character.nome || !character.urlDaImagem) {
    return res.status(400).send({ message: 'Preencha todos os campos' });
  }

  const newCharacter = charactersService.createCharacterService(character);
  res.status(201).send(newCharacter);
};

/* UPDATE */
const updateCharacterController = (req, res) => {
  const idParam = Number(req.params.id);

  if (!idParam) {
    return res.status(400).send({ message: 'Id invalido' });
  }

  const characterEdit = req.body;

  if (!characterEdit || !characterEdit.nome || !characterEdit.urlDaImagem) {
    return res.status(400).send({ message: 'Preencha todos os campos' });
  }

  const updateCharacter = charactersService.updateCharacterService(idParam, characterEdit);
  res.send(updateCharacter);
};

/* DELETE */
const deleteCharacterController = (req, res) => {
  const idParam = +req.params.id;

  if (!idParam) {
    return res.status(400).send({ message: 'Id invalido' });
  }

  charactersService.deleteCharacterService(idParam);

  res.send({ message: 'Character deleted' });
};

module.exports = {
  findAllCharactersController,
  findByIdCharacterController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
};
