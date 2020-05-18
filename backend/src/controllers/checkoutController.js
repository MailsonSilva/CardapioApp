//importando conexao
const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const cliente_id = request.headers.cliente_id;
    const finalizado = request.headers.finalizado;

    const pedido = await connection("vendas")
      .join("pedidos", "vendas.pedido_id", "=", "pedidos.id")
      .join("clientes", "pedidos.cliente_id", "=", "clientes.id")
      .join("produtos", "pedidos.produto_id", "=", "produtos.id")
      .join("pagamentos", "vendas.pagamento_id", "=", "pagamentos.id")
      .join(
        "tipoPagamentos",
        "vendas.tipoPagamento_id",
        "=",
        "tipoPagamentos.id"
      )
      .join(
        "transportadoras",
        "vendas.transportadora_id",
        "=",
        "transportadoras.id"
      )
      .where({
        "pedidos.cliente_id": cliente_id,
        "vendas.finalizado": finalizado,
      })
      .select(
        "vendas.id",
        "vendas.pedido_id",
        "pedidos.produto_id",
        "produtos.nome",
        "produtos.valor",
        "pagamentos.pagamento",
        "tipoPagamentos.tipo",
        "transportadoras.frete",
        "vendas.finalizado"
      );

    return response.json(pedido);
  },
};
