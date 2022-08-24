const express = require('express');
const port = 3000;
const app = express();

app.use(express.json());

const rickAndMorty = [
  {
    id: 1,
    nome: 'Glar',
    urlDaImagem: 'http://www.glar.com.br',
  },
  {
    id: 2,
    nome: 'Jerry Smith',
    urlDaImagem: 'http://www.jerrysmith.com.br',
  },
  {
    id: 3,
    nome: 'Japheth',
    urlDaImagem: 'http://www.japheth.com.br',
  },
];

/* GET ALL */
app.get('/rick-and-morty/todos-personagens', (req, res) => {
  res.send(rickAndMorty);
});

/* GET BY  ID*/
app.get('/rick-and-morty/buscar-Personagem/:id', (req, res) => {
  const parametroId = req.params.id;
  const escolhaPersonagem = rickAndMorty.find((rickAndMorty) => rickAndMorty.id == parametroId);
  res.send(escolhaPersonagem);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
