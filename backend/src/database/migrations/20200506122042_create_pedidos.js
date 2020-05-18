exports.up = function (knex) {
  return knex.schema.createTable("pedidos", function (table) {
    table.increments();

    table.string("cliente_id").notNullable();
    table.foreign("cliente_id").references("id").inTable("clientes");

    table.string("produto_id").notNullable();
    table.foreign("produto_id").references("id").inTable("produtos");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("pedidos");
};
