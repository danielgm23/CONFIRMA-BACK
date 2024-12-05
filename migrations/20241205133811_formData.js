exports.up = function(knex) {
    return knex.schema.createTable('FormData', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('phone').notNullable();
      table.integer('adult_count').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('FormData');
  };
  