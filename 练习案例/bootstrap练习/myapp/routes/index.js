//引入express模块
var express = require('express');
//获取路由
var router = express.Router();
//引入model.js文件
var mm=require("../lib/model.js");
/* GET home page. */

//查找数据返回前台，进行渲染
router.get('/', function(req, res, next) {
  mm.find({}, function (err, docs) {
    if(err){
      console.log("查找错误")
    }else{
      res.render('index', {
        cz:docs
      });
    }
  })

});

//写入数据
router.get("/write", function (req, res, next) {
  var da=req.query;
  var ma=new mm(da);
  ma.save(function (err) {
    if(err){
      console.log("写入失败")
    }else{
      res.send("写入成功")
    }
  })
});

//在次读取数据，实现ajax异步渲染更新数据
router.get("/read", function (req, res, next) {
  mm.find({}, function (err,docs) {
    if(err){
      res.send({
        code:1,
        message:"读取数据失败"
      })
    }else{
      res.send({
        code:0,
        data:docs,
        message:"读取数据成功"
      })
    }
  })
});

//单行删除数据
router.get("/sc", function (req, res, next) {
  var da=req.query;
  console.log(da);
  mm.remove(da,function (err) {
    if(err){
      console.log("删除错误")
    }else{
      res.send("删除成功")
    }
  })
});

//全部删除
router.get("/delAll",function (req, res, next) {
    mm.remove({},function (err) {
        if(err){
            console.log("全部删除错误")
        }else{
            res.send("全部删除成功")
        }
    })
})

//修改，根据下标判断
router.get("/xg", function (req, res, next) {
  //获取前台数据
  var xx=req.query;
  //获取要修改的内容
  var xa=xx.a;
  //获取下标
  var xb=xx.b;
  //获取修改后的内容
  var xc=xx.c;
  if(xb==0){
    mm.updateOne({"id":xa},{"id":xc}, function (err) {
      if(!err){
        res.render("修改成功");
        return false
      }
    })
  }else if(xb==1){
    mm.updateOne({"name":xa},{"name":xc}, function (err) {
      if(!err){
        res.render("修改成功")
      }
    })
  }else if(xb==2){
    mm.updateOne({"date":xa},{"date":xc}, function (err) {
      if(!err){
        res.render("修改成功")
      }
    })
  }else if(xb==3){
    mm.updateOne({"class":xa},{"class":xc}, function (err) {
      if(!err){
        res.render("修改成功")
      }
    })
  }else if(xb==4){
    mm.updateOne({"sex":xa},{"sex":xc}, function (err) {
      if(!err){
        res.render("修改成功")
      }
    })
  }
});
module.exports = router;
