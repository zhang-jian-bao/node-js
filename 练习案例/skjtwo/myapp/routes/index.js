var express = require('express');//引入express模块
var router = express.Router();//获取路由
var mm=require("../lib/model.js");//引入model.js文件
/* GET home page. */
router.get('/', function(req, res, next) {
  //查找渲染
  mm.find({}, function (err,docs) {
    if(err){
      console.log("查找错误！");
    }else{
      console.log(docs);
      res.render('index',{
        da:docs
      });
    }
  });
});
//添加
router.get("/tj", function (req, res, next) {
  //获取前台请求数据
  console.log(req.query);
  var da=req.query;
  //实例化
  var ss=new mm(da);
  ss.save(function (err) {
    if(err){
      console.log("添加失败！")
    }else{
      res.send("添加成功")
    }
  })
});
//删除
router.get("/sc", function (req, res, next) {
  console.log(req.query);
  var nn=req.query;
  mm.deleteOne(nn, function (err) {
    if(err){
      console.log("删除失败")
    }else{
      res.send("删除成功")
    }
  })
});
//修改
router.get("/xg", function (req, res, next) {
  console.log(req.query);
  var xaa=req.query;
  mm.updateOne(xaa.list1,xaa.list2, function (err) {
    if(err){
      console.log("修改失败！")
    }else{
      res.send("修改成功")
    }
  })
});

module.exports = router;
