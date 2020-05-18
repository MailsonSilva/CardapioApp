//importando conexao
const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const { email, senha } = request.body;

    const administrator = await connection("administrator")
      .where({ email: email, senha: senha })
      .select("nome")
      .first();

    if (!administrator) {
      return response.status(400).json({ error: "Email ou senha incorretos!" });
    }
    return response.json(administrator);
  },
};
