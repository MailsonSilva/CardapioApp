exports.up = function (knex) {
  return knex.schema.createTable("produtos", function (table) {
    table.increments();
    table.string("nome").notNullable();
    table.decimal("valor").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("produtos");
};
