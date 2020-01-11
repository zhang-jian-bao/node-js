//引入express
var express = require('express');
//获取路由
var router = express.Router();
//引入qiModel.js文件
var mo=require("../lib/qiModel");

/* GET home page. */
//主页查找数据，渲染
router.get('/', function(req, res, next) {
  mo.find({},function (err, data) {
    if(err){
      console.log("查找失败")
    }else{
      res.render('index',{
        data:data
      });
    }
  })

});

//1.添加数据
router.get("/add",function (req, res, next) {
  //获取前台请求数据
  var da=req.query;
  console.log(da);
  //实例化
  var ma=new mo(da);
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

//2.在读取数据库数据，渲染
router.get("/read",function (req, res, next) {
  mo.find({},function (err,data) {
    if(err){
      res.send({
        code:2,
        message:"数据读取失败"
      });
    }else{
      res.send({
        code:0,
        data:data,
        message:"数据读取成功"
      });
    }
  })
})

//3. 删除数据
router.get("/dela",function (req, res, next) {
  var da=req.query;
  console.log(da);
  mm.remove(da,function (err) {
    if(err){
      res.send({
        code:3,
        message:"数据删除失败"
      });
    }else{
      res.send({
        code:0,
        message:"数据删除成功"
      });
    }
  })
})


module.exports = router;
