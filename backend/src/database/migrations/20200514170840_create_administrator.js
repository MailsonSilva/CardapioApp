exports.up = function (knex) {
  return knex.schema.createTable("administrator", function (table) {
    table.string("id").primary();
    table.string("nome").notNullable();
    table.string("email").notNullable();
    table.string("senha").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("administrator");
};
