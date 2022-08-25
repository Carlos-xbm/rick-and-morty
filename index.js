const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/characters.route');

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use('/rick-and-morty', routes);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
