var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express kingdavid' });
});

router.get('/login', function (req, res, next) {
  res.render('login', { title: 'Express kingdavid' });
});

module.exports = router;
