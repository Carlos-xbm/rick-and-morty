const Characters = require('../models/Characters');

const findAllCharactersService = async () => {
  const allCharacters = await Characters.find();
  return allCharacters;
};

const findByIdCharacterService = async (idParam) => {
  const idCharacter = await Characters.findById(idParam);
  return idCharacter;
};

const createCharacterService = async (newCharacter) => {
  const createCharacter = await Characters.create(newCharacter);
  return createCharacter;
};

const updateCharacterService = async (id, editCharacter) => {
  const updateCharacter = await Characters.findByIdAndUpdate(id, editCharacter);
  return updateCharacter;
};

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
