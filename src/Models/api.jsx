const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para parsear o corpo das requisições
app.use(bodyParser.json());

// Dados simulados (substitua por um banco de dados real)
let dados = [];

// Rotas da API
app.get('/api/dados', (req, res) => {
  res.json(dados);
});

app.post('/api/dados', (req, res) => {
  const novoDado = req.body;
  dados.push(novoDado);
  res.json(novoDado);
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
