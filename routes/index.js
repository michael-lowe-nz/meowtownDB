var express = require('express');
var router = express.Router();

var getAllCats = require('../db/getAllCats').getAllCats
var getCatByID = require('../db/getCatByID').getCatByID

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/cats')
});


module.exports = router;
