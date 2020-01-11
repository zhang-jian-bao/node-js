var express = require('express');
var router = express.Router();
var mm=require("../lib/appModel");
/* GET home page. */


router.get('/', function(req, res, next) {
  mm.find({},function (err, data) {
    if(err){
      console.log("查找数据库数据sb")
    }else{
      res.render('index',{
        data:data
      });
    }
  })

});

//1.添加
router.get("/add",function (req, res, next) {
  var da=req.query;
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
})

//2.读取
router.get("/read",function (req, res, next) {
  mm.find({},function (err,data) {
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
})

//3.删除
router.get("/del",function (req, res, next) {
  var da=req.query;
  mm.remove(da,function (err) {
    if(err){
      res.send({
        code:3,
        message:"删除数据失败"
      });
    }else{
      res.send({
        code:0,
        message:"删除数据成功"
      });
    }
  })
})

//4.修改数据
router.get("/edit",function (req, res, next) {
  var da=req.query;
  mm.update(da.f,da.q,function (err) {
    if(err){
      res.send({
        code:4,
        message:"修改数据失败"
      });
    }else{
      res.send({
        code:0,
        message:"修改数据成功"
      });
    }
  })
})

//5.搜素
router.get("/ss",function (req, res, next) {
  var da=req.query;
  mm.find({"name":new RegExp(da.name,"ig")},function (err,data) {
    if(err){
      res.send({
        code:5,
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
})

module.exports = router;
