//importando conexao
const connection = require("../database/connection");
const generateUniqueID = require("../utils/generateUniqueId");

module.exports = {
  async index(request, response) {
    const administrator = await connection("administrator").select("*");
    return response.json(administrator);
  },

  async create(request, response) {
    const { email, senha, nome } = request.body;
    const id = generateUniqueID();

    await connection("administrator").insert({
      id,
      nome,
      email,
      senha,
    });
    return response.json({ nome });
  },
};
