var express = require('express');
var router = express.Router();

const bbs = require('./bbs');

router.use('/bbs', bbs);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
