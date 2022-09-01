const { Schema, model } = require("mongoose");

const CharacterSchema = new Schema({
  nome: { type: String, require: true },
  imagemUrl: { type: String, require: true },
});

const Characters = model('characters', CharacterSchema);

module.exports = Characters;
