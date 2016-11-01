var express = require('express');
var router = express.Router();

var getAllCats = require('../db/getAllCats').getAllCats
var getCatByID = require('../db/getCatByID').getCatByID

router.get('/', function(req, res, next) {
  getAllCats()
    .then(function(catsFromDB){
      res.render('index', {cats: catsFromDB})
    })
    .catch(function(err){
      console.log(err)
    })
});

router.get('/:id', function(req, res, next){
  console.log("getting cat by id route")
  getCatByID(req.params.id)
    .then(function(catsFromDB){
      res.render('index', {cats: catsFromDB})
    })
    .catch(function(err){
      console.log(err)
    })
});

router.post('/', function(req, res, next){
  console.log("posting to cats")
  
})

module.exports = router;
