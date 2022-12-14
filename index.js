require('dotenv').config();
const express = require('express');
const cors = require('cors');
const charactersRoutes = require('./src/characters/routes/characters.route');
const usersRoutes = require('./src/users/routes/users.route');
const connectMongoDB = require('./src/database/database');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const authRoute = require('./src/users/auth/auth.route');

const port = process.env.PORT || 3000;
const app = express();

connectMongoDB();

app.use(express.json());
app.use(cors());

/* SWAGGER */
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

/* AUTENTICAÇÃO */
app.use('/auth', authRoute);

/* USERS & CHARACTERS */
app.use('/users', usersRoutes);
app.use('/characters', charactersRoutes);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
