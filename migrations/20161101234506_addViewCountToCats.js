
exports.up = function(knex, Promise) {
  return knex.schema.table('cats', function(table){
      table.integer('views').defaultTo(0);
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('cats', function(table){
    table.dropColumn('views')
  })
};
