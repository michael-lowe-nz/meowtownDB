var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']

var knex = Knex(knexConfig)

module.exports = {
  getCatByID: getCatByID
}

function getCatByID(idToFind){
  return knex('cats')
    .where({id: idToFind})
}
