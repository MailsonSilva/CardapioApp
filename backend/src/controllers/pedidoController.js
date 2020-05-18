//importando conexao
const connection = require('../database/connection');

module.exports = {
  async index(request, response){
      const pedidos = await connection('pedidos').select('*');
      return response.json(pedidos);
    },

  async create(request, response){
    
    const id = request.headers.pedido;
    const cliente_id = request.headers.cliente_id; 
    const produto_id = request.headers.produto_id; 
    
    await connection('pedidos').insert({
      id,
      cliente_id,
      produto_id,
    });  
    return response.json({id});
  },

  async delete(request, response){
    const {produto_id} = request.params;
    const id = request.headers.pedido;
    const cliente_id = request.headers.cliente_id; 

    const pedido = await connection('pedidos')
      .where({
        'produto_id': produto_id,
        'cliente_id': cliente_id
      })
      .select('id')
      .first();

    if (pedido.id !== id) {
      return response.status(401).json({error: 'Operação não permitida.'});
    }
    await connection('pedidos').where({'id': id, 'produto_id': produto_id}).delete();
    return response.status(204).send(); //retornando sucesso na operação
  }
};