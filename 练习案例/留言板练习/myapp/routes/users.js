//引入express模块
var express = require('express');
//获取路由
var router = express.Router();
//引入appModel.js文件
var mm=require("../lib/appModel");
/* GET users listing. */
//添加数据
router.get('/write', function(req, res, next) {
  //获取前台请求数据
  var da=req.query;
  //实列化
  var ma=new mm(da);
  //添加数据
  ma.save(function (err) {
    if(err){
      res.send({
        code:1,
        message:"添加数据失败"
      });

    }else{
      res.send({
        code:0,
        message:"添加数据成功"
      });
    }

  })

});
//从数据库读取数据，返回前台
router.get("/read",function (req, res, next) {
  mm.find({},function (err,docs) {
    if(err){
      res.send({
        code:2,
        message:"读取数据库数据失败"
      });
    }else{
      res.send({
        code:0,
        data:docs,
        message:"读取数据库数据成功"
      });

    }

  })

});
//全部删除数据
router.get("/delAll",function (req, res, next) {
  mm.remove({},function (err) {
    if(err){
      res.send({
        code:3,
        message:"全部删除数据失败"
      });
    }else{
      res.send({
        code:0,
        message:"全部删除数据成功"
      });

    }

  })

});
//单行删除数据库的数据
router.get("/del",function (req, res, next) {
  //获取前台请求的数据
  var da=req.query;
  //单删
  mm.remove(da,function (err) {
    if(err){
      res.send({
        code:4,
        message:"单行删除数据失败"
      });
    }else{
      res.send({
        code:0,
        message:"单行删除数据成功"
      });

    }

  })

});
//修改数据库数据
router.get("/xg",function (req, res, next) {
  var da=req.query;
  mm.update(da.f,da.aa,function (err) {
    if(err){
      console.log("错误")
    }else{
      res.send({
        code:0,
        message:"成功"
      })
    }
  })
})
//导出
module.exports = router;
