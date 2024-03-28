var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ostrich', { title: 'Search Results Ostrich' });
});

module.exports = router;
