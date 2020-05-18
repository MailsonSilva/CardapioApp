//estanciando a aplicação onde ficaram as rotas e funcionalidades
const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();//Indicando para o express para converter em json

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;