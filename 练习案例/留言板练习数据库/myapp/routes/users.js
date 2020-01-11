//引入express模块
var express=require("express");

//获取路由
var router=express.Router();

//引入model.js文件
var mm=require("../lib/model");

//设置数据接口路由

//添加数据到数据库
router.get("/write",function (req, res,next) {
  var da=req.query;//获取前台请求的数据，返回来是一个对象
  console.log(da)//{id:xh.name:xm,age:nl,tel:tel}
  //实例化
  var aa=new mm(da);//mm({id:..,name:..,age:..,tel:...})
  //添加
  aa.save(function (err) {
    if(err){//如果失败就输出
      res.send({
        code:1,
        message:"添加失败"
      });
    }else{//否则
      res.send({
        code:0,
        message:"添加成功"
      })
    }

  })

});

//读取数据库中的数据
router.get("/read",function (req, res, next) {
  mm.find({},function (err,docs) {
    if(err){
      res.send({
        code:2,
        message:"读取数据失败"
      });
    }else{
      res.send({
        code:0,
        data:docs,
        message:"读取数据成功"
      })
    }

  })

});

//全部删除数据
router.get("/delAll",function (req, res, next) {
  mm.remove({},function (err) {
    if(err){
      res.send({
        code:3,
        message:"全部删除失败"
      });
    }else{
      res.send({
        code:0,
        message:"全部删除成功"
      })
    }
  })
});

//单行删除
router.get("/del",function (req, res, next) {
  //获取前台请求的数据
  var data=req.query;
  mm.remove(data,function (err) {
    if(err){
      res.send({
        code:4,
        message:"单行删除失败"
      });
    }else{
      res.send({
        code:0,
        message:"单行删除成功"
      })
    }
  })
});

//修改数据库内容
router.get("/xg",function (req, res, next) {
  //获取前台请求数据
  var data=req.query;
  console.log(data);
  //获取前台的_id
  console.log(data.f);
  //获取前台的数据请求
  console.log(data.da);
  //修改数据
  mm.update(data.f,data.da,function (err) {
    if(err) {
      res.send({
        code: 5,
        message: "修改数据失败"
      });
    }else{
      res.send({
        code:0,
        message:"修改数据成功"
      });

    }

  })

});

//导出
module.exports=router;