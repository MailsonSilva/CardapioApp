//importando conexao
const connection = require('../database/connection');

module.exports = {
  async index(request, response){
      const vendas = await connection('vendas').select('*');
      return response.json(vendas);
    },

  async create(request, response){    

    const finalizado = request.headers.finalizado;
    const pedido_id = request.headers.pedido_id;
    const pagamento_id = request.headers.pagamento_id;
    const tipopagamento_id = request.headers.tipopagamento_id;
    const transportadora_id = request.headers.transportadora_id;
    const endereco_id = request.headers.endereco_id;

    const [id] = await connection('vendas').insert({
      finalizado,
      pedido_id,  
      pagamento_id,          
      tipopagamento_id,
      transportadora_id, 
      endereco_id,     
    });  
    return response.json({id});
  }
};