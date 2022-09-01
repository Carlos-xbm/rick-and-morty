const crypto = require('crypto');
class CharacterEntity {
  constructor(character) {
    this.name = character.name;
    this.imageUrl = character.imageUrl;
  }

  validate() {
    if (!this.name || !this.name.length > 5) {
      throw new Error('Nome precisa ser preenchido');
    }
    if (!this.imageUrl) {
      this.imageUrl = 'Url precisa ser informado';
    }
  }

  getCharacter() {
    return {
      name: this.name,
      imageUrl: this.imageUrl,
    };
  }
}

module.exports = CharacterEntity;
