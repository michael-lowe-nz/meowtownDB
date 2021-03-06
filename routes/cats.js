var express = require('express');
var router = express.Router();

var getAllCats = require('../db/getAllCats').getAllCats
var getCatByID = require('../db/getCatByID').getCatByID
var createCat = require('../db/createCat').createCat
var deleteCatByID = require('../db/deleteCatByID').deleteCatByID
var incrementViews = require('../db/incrementViews').incrementViews

router.get('/new', function(req, res, next){
  console.log("at new route, creting new cat")
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

router.post('/:id/delete', function(req, res, next){
  deleteCatByID(req.params.id)
    .then(function(cat){
      res.redirect('/cats')
    })
    .catch(function(err){
      console.log(err)
    })
})

router.get('/:id', function(req, res, next){
  getCatByID(req.params.id)
    .then(function(catFromDB){
      // incrementViews(req.params.id)
      res.render('catShow', catFromDB[0])
    })
    .catch(function(err){
      console.log(err)
    })
});


router.post('/', function(req, res, next){
  var newCat = req.body
  createCat(newCat.name, newCat.story, newCat.image)
    .then(function(){
      res.redirect('/cats')
    })
    .catch(function(err){
      console.log(err)
    })
})

module.exports = router;
