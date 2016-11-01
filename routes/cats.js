var express = require('express');
var router = express.Router();

var getAllCats = require('../db/getAllCats').getAllCats
var getCatByID = require('../db/getCatByID').getCatByID
var createCat = require('../db/createCat').createCat

router.get('/new', function(req, res, next){
  console.log("at new route")
  res.render('new')
})

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
  var newCat = req.body
  console.log("New cat info: ", newCat)
  createCat(newCat.name, newCat.story, newCat.image)
    .then(function(){
      res.redirect('/cats')
    })
    .catch(function(err){
      console.log(err)
    })
})

module.exports = router;
