//estanciando a aplicação onde ficaram as rotas e funcionalidades
const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");
//controllers
const clienteController = require("./controllers/clienteController");
const produtoController = require("./controllers/produtoController");
const pedidoController = require("./controllers/pedidoController");
const vendaController = require("./controllers/vendaController");
const checkoutController = require("./controllers/checkoutController");
const sessionController = require("./controllers/sessionController");
const administratorController = require("./controllers/administratorController");

// criando uma rota
const routes = express.Router();
// Session
routes.post(
  "/administrator",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      nome: Joi.string().required(),
      email: Joi.string().required(),
      senha: Joi.string().required(),
    }),
  }),
  administratorController.create
);
routes.get("/administrator", administratorController.index); //Listar todos os admin

routes.post("/session", sessionController.index); //Login

// Clientes
routes.post(
  "/clientes",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      nome: Joi.string().required(),
      endereco: Joi.string().required(),
      telefone: Joi.string().min(10).max(11),
    }),
  }),
  clienteController.create
); //Inserindo cliente

routes.get("/clientes", clienteController.index); //Listar todos os clientes

// Produtos
routes.post("/produtos", produtoController.create); //Inserindo Produtos
routes.get(
  "/produtos",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      page: Joi.number(),
    }),
  }),
  produtoController.index
); //Listar todos os Produtos

// Pedidos
routes.post("/pedidos", pedidoController.create); //Inserindo pedidos
routes.get("/pedidos", pedidoController.index); //Listar todos os pedidos
routes.delete("/pedidos/:produto_id", pedidoController.delete); //Deletar produtos do pedido

// Vendas
routes.post("/vendas", vendaController.create); //Inserindo vendas
routes.get("/vendas", vendaController.index); //Listar todos os vendas

//Checkout
routes.get("/checkout", checkoutController.index); //Listar todos os vendas

module.exports = routes;
