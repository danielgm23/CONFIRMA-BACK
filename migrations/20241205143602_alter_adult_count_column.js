exports.up = function(knex) {
    return knex.schema.alterTable('FormData', function(table) {
      table.text('adult_count').alter(); // Altera o tipo da coluna para 'text'
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.alterTable('FormData', function(table) {
      table.integer('adult_count').alter(); // Volta para 'integer' caso a migração seja revertida
    });
  };
  