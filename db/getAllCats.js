var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']

var knex = Knex(knexConfig)

module.exports = {
  getAllCats: getAllCats
}

function getAllCats(){
  return knex('cats')
}
