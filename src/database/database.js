const mongoose = require('mongoose');

const connectMongoDB = () => {
  mongoose
    .connect(process.env.URL_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDb CONNECT!'))
    .catch((error) => console.log(`Erro ao conectar com o MongoDb, erro: ${error}`));
};

module.exports = connectMongoDB;
