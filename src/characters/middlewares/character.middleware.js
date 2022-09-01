const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id invalido' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const Character = req.body;

  if (!Character || !Character.nome || !Character.imagemUrl) {
    return res.status(400).send({ message: 'Preencha todos os campos' });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
