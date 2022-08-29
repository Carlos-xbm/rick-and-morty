const Characters = require('../models/Characters');

/* FIND ALL */
const findAllCharactersService = async () => {
  const allCharacters = await Characters.find();
  return allCharacters;
};

/* FIND BY ID */
const findByIdCharacterService = async (idParam) => {
  const idCharacter = await Characters.findById(idParam);
  return idCharacter;
};

/* CREATE */
const createCharacterService = async (newCharacter) => {
  const createCharacter = await Characters.create(newCharacter);
  return createCharacter;
};

/* UPDATE */
const updateCharacterService = async (id, editCharacter) => {
  const updateCharacter = await Characters.findByIdAndUpdate(id, editCharacter);
  return updateCharacter;
};

/* DELETE */
const deleteCharacterService = async (id) => {
  return await Characters.findByIdAndDelete(id);
};

module.exports = {
  findAllCharactersService,
  findByIdCharacterService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
};
