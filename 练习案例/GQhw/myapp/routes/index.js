var express = require('express');//引入express模块
var router = express.Router();//获取路由
 var fs=require("fs");//引入fs模块
/* GET home page. */
router.get('/', function(req, res, next) {
  var sy=fs.readFileSync("./json/showye.json","utf-8");
  var list=fs.readFileSync("./json/list.json","utf-8");
  res.render('index', {
    title: JSON.parse(sy),
    list:JSON.parse(list)
  });
});

module.exports = router;
