
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('cats', function(table){
    table.increments('id')
    table.string('name')
    table.string('story')
    table.string('image')
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('cats')
};
