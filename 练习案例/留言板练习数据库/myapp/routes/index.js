//引入express模块
var express = require('express');
//获取路由
var router = express.Router();
//引入model.js文件
var mm=require("../lib/model");
//设置渲染页面路由
/* GET home page. */
//主页从数据库找到数据，返回前台，并渲染
router.get('/', function(req, res, next) {
  mm.find({},function (err,docs) {
    if(err){
      console.log("查找数据库数据失败")
    }else{
      res.render('index', {

        data:docs

      });
    }
  })

});

//导出路由
module.exports = router;
