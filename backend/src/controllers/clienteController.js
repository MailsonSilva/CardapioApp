//importando conexao
const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const clientes = await connection("clientes").select("*");
    return response.json(clientes);
  },

  async create(request, response) {
    const { nome, telefone, endereco, numero } = request.body;

    const [id] = await connection("clientes").insert({
      nome,
      telefone,
      endereco,
      numero,
    });
    return response.json({ id });
  },
};
