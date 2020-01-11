var express = require('express');
var router = express.Router();
var mm=require("../lib/model");
/* GET home page. */
router.get('/', function(req, res, next) {
  mm.find({}, function (err,data) {
    if(err){
      console.log("查找错误")
    }else{
      res.render('index',{
        cc:data
      });
    }
  })

});
//添加
router.get("/rest", function (req, res, next) {
  console.log(req.query);
  var da=req.query;//获取前台请求数据
  var dd=new mm(da);//实例化
  dd.save(function (err,docs) {//添加到数据库
    if(err){
      console.log("添加错误");
    }else{
      console.log(docs);
      res.send("成功")
    }
  });

});
//删除
router.get("/sc", function (req, res, next) {
  console.log(req.query);
  var dada=req.qurey;
  //删除数据库数据
  mm.deleteOne(dada, function (err) {
    if(err){
      console.log("删除失败");
    }else{
      console.log("删除成功");
      res.send("删除成功");
    }
  })
});
//修改
router.get("/xg",function(req,res,next){
  console.log(req.query);
 var xx=req.query;
  mm.updateOne(xx.list1,xx.list2, function (err, dd) {
    if(err){
      console.log("修改错误");
    }else{
      console.log(dd);
      res.send("修改成功")
    }
  })



});
//单删有点问题
//router.get("/dsc", function (req, res) {
//  var sa=req.query;
//  mm.deleteOne(sa, function (err) {
//    if(err){
//      console.log("单删错误")
//    }else{
//      res.send("单删成功")
//    }
//  })
//});


module.exports = router;
