var express = require('express');
var router = express.Router();
var mm=require("../lib/model.js");//引入model.js文件
/* GET home page. */
//查找加渲染
router.get('/', function(req, res, next) {
  //查找
  mm.find({}, function (err, docs) {
    if(err){
      console.log("查找错误")
    }else{
      res.render('index',{
        dd:docs
      });
    }
  })

});
//添加
router.get("/tj", function (req, res, next) {
  var da=req.query;
  //实例化
  var ma=new mm(da);
  ma.save(function (err) {
    if(err){
      console.log("添加错误")
    }else{
      res.send("添加成功")
    }
  })
});
//删除
router.get("/sc", function (req, res, next) {
  var sa=req.query;
  mm.deleteOne(sa, function (err) {
    if(err){
      console.log("删除失败")
    }else{
      res.send("删除成功")
    }
  })
});
//修改
router.get("/xg", function (req, res) {
  var xa=req.query;
  mm.updateOne(xa.list1,xa.list2, function (err) {
    if(err){
      console.log("修改失败")
    }else{
      res.send("修改成功")
    }
  })
});

module.exports = router;
