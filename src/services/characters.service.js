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

module.exports = {
  findAllCharactersService,
  findByIdCharacterService,
};
