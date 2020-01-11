var express = require('express');
var router = express.Router();

//引入数据库模型
var mongo=require("../lib/Model/Model");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
module.exports = router;
