//引入express

var express=require("express");
//引入数据库模型
var mongo=require("../lib/Model/Model");

//得到路由
var router=express.Router();

//设置路由
router.get("/add",function (req,res,next) {
   var zlfMit=new mongo(req.query);
   zlfMit.save(function (err,data) {
       if(err){
           res.json({code:1,message:"添加失败"})
       }else {
           res.json({code:0,message:"添加成功",data:data})
       }
   })
});
//获取数据
router.get("/see",function (req,res,next) {
    mongo.find(function (err,data) {
        if(err){
            res.json({code:2,message:"请求失败"})

        }else {
            res.json({code:0,message:"请求成功",data:data})
        }
    })
});
//修改状态
router.get("/updata",function (req,res,next) {
    mongo.update(req.query.f,req.query.g,function (err,data) {
        if(err){
            res.json({code:3,message:"修改失败"})
        }else {
            res.json({code:0,message:"修改成功",data:data})
        }
    })
});
//删除路由
router.get("/del",function (req,res,next) {
   mongo.remove(req.query,function (err,data) {
       if(err){
           res.json({code:5,message:"删除失败"})
       }else {
           res.json({code:0,message:"删除成功",data:data})
       }
   })
});



//导出路由
module.exports=router;