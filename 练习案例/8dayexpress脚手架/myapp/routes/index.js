var express = require('express');//引入express模块
var router = express.Router();//获取路由文件

/* GET home page. */      //这是设置路由
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });//这是返回index.ejs文件，返回数据为title中的express
});

module.exports = router;//导出路由
