exports.up = function (knex) {
  return knex.schema.createTable("clientes", function (table) {
    table.increments();
    table.string("nome").notNullable();
    table.string("telefone").notNullable();
    table.string("endereco").notNullable();
    table.string("numero");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("clientes");
};
