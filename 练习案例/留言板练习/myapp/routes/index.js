//引入express模块
var express = require('express');
//获取路由
var router = express.Router();
//引入appModel.js文件
var mm=require("../lib/appModel");
//设置主页路由，渲染页面
/* GET home page. */
router.get('/', function(req, res, next) {
  mm.find({},function (err, docs) {
    if(err){
      res.send({
        code:1,
        message:"查找数据错误"
      });

    }else{
      res.render('index',{
        data:docs
      });
    }

  });

});
//导出
module.exports = router;
