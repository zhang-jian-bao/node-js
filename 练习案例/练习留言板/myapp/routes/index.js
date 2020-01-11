//引入express模块
var express = require('express');
//获取路由
var router = express.Router();
//引入studentModel.js文件
var mm=require("../lib/studentModel");
/* GET home page. */
router.get('/', function(req, res, next) {
  mm.find({},function (err,data) {
    if(err){
      console.log("数据查找失败")
    }else{
      res.render('index',{
        data:data
      });
    }
  })

});

module.exports = router;
