const crypto = require('crypto');
class CharacterEntity {
  constructor(character) {
    this.nome = character.nome;
    this.imagemUrl = character.imagemUrl;
  }

  validate() {
    if (!this.nome || !this.nome.length > 5) {
      throw new Error('Nome precisa ser preenchido');
    }
    if (!this.imagemUrl) {
      this.imagemUrl = 'Url precisa ser informado';
    }
  }

  getCharacter() {
    return {
      nome: this.nome,
      imagemUrl: this.imagemUrl,
    };
  }
}

module.exports = CharacterEntity;
