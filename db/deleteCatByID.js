var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']

var knex = Knex(knexConfig)

module.exports = {
  deleteCatByID: deleteCatByID
}

function deleteCatByID(idToDelete){
  return knex('cats')
    .where('id',idToDelete)
    .del()
}
