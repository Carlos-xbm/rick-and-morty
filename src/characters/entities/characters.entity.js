const crypto = require('crypto');
class CharacterEntity {
  constructor(character) {
    this.nome = character.nome;
    this.urlDaImagem = character.urlDaImagem;
  }

  validate() {
    if (!this.nome || !this.nome.length > 5) {
      throw new Error('Nome precisa ser preenchido');
    }
    if (!this.urlDaImagem) {
      this.urlDaImagem = 'Url precisa ser informado';
    }
  }

  getCharacter() {
    return {
      nome: this.nome,
      urlDaImagem: this.urlDaImagem,
    };
  }
}

module.exports = CharacterEntity;
