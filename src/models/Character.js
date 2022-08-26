const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  urlDaImagem: {
    type: String,
    require: true,
  },
});

const Character = mongoose.model('characters', CharacterSchema);

module.exports = Character;
