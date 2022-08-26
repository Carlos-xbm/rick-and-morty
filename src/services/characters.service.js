const Character = require('../models/Character');

const findAllCharactersService = async () => {
  const characters = await Character.find();
  return characters;
};

const findByIdCharacterService = async (idParam) => {
  const character = await Character.findById(idParam);
  return character;
};

const createCharacterService = (newCharacter) => {
  const newId = characters.length + 1;
  newCharacter.id = newId;
  characters.push(newCharacter);
  return newCharacter;
};

const updateCharacterService = (id, characterEdited) => {
  characterEdited['id'] = id;
  const characterIndex = characters.findIndex((character) => character.id == id);
  characters[characterIndex] = characterEdited;
  return characterEdited;
};

const deleteCharacterService = (id) => {
  const characterIndex = characters.findIndex((character) => character.id == id);
  return characters.splice(characterIndex, 1);
};

module.exports = {
  findAllCharactersService,
  findByIdCharacterService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
};
