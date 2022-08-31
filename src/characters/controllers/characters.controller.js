const serviceCharacters = require('../services/characters.service');

/* GET_ALL */
const findAllCharactersController = async (req, res) => {
  const allCharacters = await serviceCharacters.findAllCharactersService();

  if (allCharacters.length == 0) {
    return res.status(404).send({ message: 'Não existe nenhum character cadastrado' });
  }

  res.send(allCharacters);
};

/* GET_BY_ID */
const findByIdCharacterController = async (req, res) => {
  const idParam = req.params.id;

  const idCharacter = await serviceCharacters.findByIdCharacterService(idParam);

  if (!idCharacter) {
    return res.status(404).send({ message: 'Character não existe' });
  }

  res.send(idCharacter);
};

/* CREATE */
const createCharacterController = async (req, res) => {
  const createCharacter = req.body;

  const newCharacter = await serviceCharacters.createCharacterService(createCharacter);
  res.status(201).send(newCharacter);
};

/* UPDATE */
const updateCharacterController = async (req, res) => {
  const idParam = req.params.id;

  const editCharacter = req.body;

  const updateCharacter = await serviceCharacters.updateCharacterService(idParam, editCharacter);
  res.send(updateCharacter);
};

/* DELETE */
const deleteCharacterController = async (req, res) => {
  const idParam = req.params.id;

  await serviceCharacters.deleteCharacterService(idParam);

  res.send({ message: 'Character deleted' });
};

/* const findByNameCharacterController = async (req, res) => {
  const nameParam = req.body;

  const nameCharacter = await serviceCharacters.findByNameCharacterService(nameParam);

  if (!nameCharacter) {
    return res.status(404).send({ message: 'Character não existe' });
  }

  res.send(nameCharacter);
};
 */
const findByNameCharacterController = async (req, res) => {
  const { nome } = req.body;
  const name = await serviceCharacters.findByNameCharacterService(nome);

  if (!name) {
    return res.status(404).send({ message: 'Character não encontrado' });
  }

  res.send({ name });
};
module.exports = {
  findAllCharactersController,
  findByIdCharacterController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
  findByNameCharacterController,
};
