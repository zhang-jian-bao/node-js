var express = require('express');
var router = express.Router();
//var fs=require("fs");
/* GET home page. */
//首页显示路由
router.use('/show', function(req, res, next) {
  res.render('index');
});


module.exports = router;
