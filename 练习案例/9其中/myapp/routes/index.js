//引入express模块
var express = require('express');

//获取路由
var router = express.Router();

//引入appModel.js文件
var mm=require("../lib/appModel");

//设置路由
router.get('/', function(req, res, next) {
  mm.find({},function (err ,data) {
    if(err){
      console.log("数据查找失败啦")
    }else{
      res.render('index',{
        data:data
      });
    }
  })

});

//1.添加
router.get("/add",function (req, res, next) {
  //获取前台请求数据
  var da=req.query;
  //实例化
  var ma=new mm(da);
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

//2.读取数据库数据u，返回前台进行渲染
router.get("/read",function (req, res, next) {
  mm.find({},function (err, data) {
    if(err){
      res.send({
        code:2,
        message:"读取数据失败"
      });
    }else{
      res.send({
        code:0,
        data:data,
        message:"读取数据成功"
      });

    }
  })
});

//3.全部删除数据
router.get("/dalAll",function (req, res, next) {
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

//4. 单行删除数据
router.get("/del",function (req, res, next) {
  //获取前台请求数据
  var da=req.query;
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

//5.修改数据
router.get("/edit",function (req, res, next) {
  //获取前台请求数据
  var da=req.query;
  mm.update(da.f,da.q,function (err) {

      if(err){
        res.send({
          code:5,
          message:"修改数据失败"
        });
      }else{
        res.send({
          code:0,
          message:"修改数据成功"
        });

      }
  })
});


//7.查询数据
router.get("/hc",function (req, res, next) {
  var da=req.query;
  mm.find(da,function (err,data) {
    if(err){
      res.send({
        code:7,
        message:"查找数据失败"
      });
    }else{
      res.send({
        code:0,
        data:data,
        message:"查找数据成功"
      });

    }
  })
});

//6. 模糊查询
router.get("/mh",function (req, res, next) {
  //获取前台请求数据
  var da=req.query;
  mm.find({"name":new RegExp(da.name,"ig")},function (err,data) {
    if(err){
      res.send({
        code:6,
        message:"模糊查找数据失败"
      });
    }else{
      res.send({
        code:0,
        data:data,
        message:"模糊查找数据成功"
      });

    }
  })
});

//8. 分页
router.get("/pag",function (req, res, next) {
  var da=req.query;
  mm.find(function (err,data) {
    if(err){
      res.send({
        code:8,
        message:"分页错误"
      });
    }else{
      res.send({
        code:0,
        data:data,
        message:"分页成功"
      });
    }
  }).limit(2).skip(Number(da.index)*2);
});

module.exports = router;
