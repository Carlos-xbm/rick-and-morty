const characters = [
  {
    id: 1,
    nome: 'Glar',
    urlDaImagem: 'http://www.glar.com.br',
  },
  {
    id: 2,
    nome: 'Jerry Smith',
    urlDaImagem: 'http://www.jerrysmith.com.br',
  },
  {
    id: 3,
    nome: 'Japheth',
    urlDaImagem: 'http://www.japheth.com.br',
  },
];

const findAllCharactersService = () => {
  return characters;
};

const findByIdCharacterService = (idParam) => {
  return characters.find((character) => character.id == idParam);
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
