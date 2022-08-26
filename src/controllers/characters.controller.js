const charactersService = require('../services/characters.service');
const mongoose = require('mongoose');

/* GET_ALL */
const findAllCharactersController = async (req, res) => {
  const characters = await charactersService.findAllCharactersService();

  if (characters.length == 0) {
    return res.status(404).send({ message: 'Não existe nenhum character cadastrado' });
  }

  res.send(characters);
};

/* GET_BY_ID */
const findByIdCharacterController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id invalido' });
  }

  const searchCharacter = await charactersService.findByIdCharacterService(idParam);

  if (!searchCharacter) {
    return res.status(404).send({ message: 'Character não existe' });
  }

  res.send(searchCharacter);
};

/* CREATE */
const createCharacterController = async (req, res) => {
  const character = req.body;

  if (!character || !character.nome || !character.urlDaImagem) {
    return res.status(400).send({ message: 'Preencha todos os campos' });
  }

  const newCharacter = await charactersService.createCharacterService(character);
  res.status(201).send(newCharacter);
};

/* UPDATE */
const updateCharacterController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id invalido' });
  }

  const characterEdit = req.body;

  if (!characterEdit || !characterEdit.nome || !characterEdit.urlDaImagem) {
    return res.status(400).send({ message: 'Preencha todos os campos' });
  }

  const updateCharacter = await charactersService.updateCharacterService(idParam, characterEdit);
  res.send(updateCharacter);
};

/* DELETE */
const deleteCharacterController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id invalido' });
  }

  await charactersService.deleteCharacterService(idParam);

  res.send({ message: 'Character deleted' });
};

module.exports = {
  findAllCharactersController,
  findByIdCharacterController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
};
