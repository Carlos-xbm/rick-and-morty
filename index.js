require('dotenv').config();
const express = require('express');
const cors = require('cors');
const charactersRoutes = require('./src/characters/routes/characters.route');
const usersRoutes = require('./src/users/routes/users.route');
const connectMongoDB = require('./src/database/database');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const swaggerAutogen = require('swagger-autogen')();

const port = process.env.PORT || 3000;
const app = express();

connectMongoDB();

app.use(express.json());
app.use(cors());

/* SWAGGER */
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.use('/rick-and-morty', charactersRoutes, usersRoutes);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
