const { Schema, model } = require("mongoose");

const CharacterSchema = new Schema({
  name: { type: String, require: true },
  imageUrl: { type: String, require: true },
});

const Characters = model('characters', CharacterSchema);

module.exports = Characters;
