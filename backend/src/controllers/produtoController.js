//importando conexao
const connection = require('../database/connection');

module.exports = {
  async index(request, response){
      const {page = 1} = request.query;

      const [count] = await connection('produtos').count();

      const produtos = await connection('produtos')
        .limit(10)
        .offset((page - 1) * 10)
        .select('*');

      response.header('X-Total-Count', count['count(*)']);

      return response.json(produtos);
    },

  async create(request, response){
    const {nome, valor} = request.body;
    
    const [id] = await connection('produtos').insert({
      nome,
      valor,
    });  
    return response.json({id});
  }
};