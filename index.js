require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/characters.route');
const connectMongoDB = require('./src/database/database');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const port = process.env.PORT || 3000;
const app = express();

connectMongoDB();

app.use(express.json());
app.use(cors());

/* SWAGGER */
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.use('/rick-and-morty', routes);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
