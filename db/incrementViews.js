var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']

var knex = Knex(knexConfig)

module.exports = {
  incrementViews: incrementViews
}

function incrementViews(idToIncrement){
  return knex('cats')
    .where(id = idToIncrement)
    .update(views, 100)
}
