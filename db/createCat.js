var Knex = require('knex')
var knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']

var knex = Knex(knexConfig)

module.exports = {
  createCat: createCat
}

function createCat(name, story, image){
  return knex('cats').insert({name: name, story: story, image: image})
}
