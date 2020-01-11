//引入express模块
var express = require('express');
//获取路由
var router = express.Router();
//引入qiModel.js文件
var mm=require("../lib/qiModel");

/* GET home page. */
//注册页面
router.get('/zhuce', function(req, res, next) {
  res.render('index');
});
//列表页面
router.get("/list",function (req, res, next) {
  mm.find({},function (err, docs) {
    if(err){
      res.send({
        code:10,
        message:"查找数据失败"
      });
    }else{
      res.render("list",{
        data:docs
      });
    }
  })

});
//编辑页面
router.get("/edit",function (req, res, next) {
  res.render("edit");
});
module.exports = router;
