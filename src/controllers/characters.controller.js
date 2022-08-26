const serviceCharacters = require('../services/characters.service');
const mongoose = require('mongoose');

/* GET_ALL */
const findAllCharactersController = async (req, res) => {
  const allCharacters = await serviceCharacters.findAllCharactersService();

  if (allCharacters.length == 0) {
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

  const idCharacter = await serviceCharacters.findByIdCharacterService(idParam);

  if (!idCharacter) {
    return res.status(404).send({ message: 'Character não existe' });
  }

  res.send(idCharacter);
};

/* CREATE */
const createCharacterController = async (req, res) => {
  const createCharacter = req.body;

  if (!createCharacter || !createCharacter.nome || !createCharacter.urlDaImagem) {
    return res.status(400).send({ message: 'Preencha todos os campos' });
  }

  const newCharacter = await serviceCharacters.createCharacterService(createCharacter);
  res.status(201).send(newCharacter);
};

/* UPDATE */
const updateCharacterController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id invalido' });
  }

  const editCharacter = req.body;

  if (!editCharacter || !editCharacter.nome || !editCharacter.urlDaImagem) {
    return res.status(400).send({ message: 'Preencha todos os campos' });
  }

  const updateCharacter = await serviceCharacters.updateCharacterService(idParam, editCharacter);
  res.send(updateCharacter);
};

/* DELETE */
const deleteCharacterController = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id invalido' });
  }

  await serviceCharacters.deleteCharacterService(idParam);

  res.send({ message: 'Character deleted' });
};

module.exports = {
  findAllCharactersController,
  findByIdCharacterController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
};
