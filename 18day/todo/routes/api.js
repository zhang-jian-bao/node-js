var express = require("express");

var router = express.Router();

var cModel = require("../lib/model/userModel");

//增
router.get("/add",function (req,res,next) {

    //接收前台发送过来的数据
    console.log(req.query);

    //存储数据
    var m = new cModel(req.query);
    m.save(function (error,docs) {
        if(error){
          res.send({
              code : 1,
              message : "数据存储失败"
          })
        }else{
          res.send({
              code : 0,
              message : "数据存储成功"
          })
        }
    })
});



//读取数据的接口
router.get("/read",function (req,res,next) {
    cModel.find({},function (error,data) {
        if(error){
            res.send({
                code : 2,
                message : "数据读取失败"
            })
        }else{
            res.send({
                code : 0,
                message : "数据读取成功",
                data : data
            })
        }
    })
});

//删除数据的接口
router.get("/del",function (req,res,next) {
    cModel.remove(req.query,function (error) {
        if(error){
            res.send({
                code : 3,
                message : "数据删除失败"
            })
        }else{
            res.send({
                code : 0,
                message : "数据删除成功"
            })
        }
    })
});

//删除全部数据接口
router.get("/remove",function (req,res,next) {
    cModel.remove({},function (error) {
        if(error){
            res.send({
                code : 4,
                message : "全部数据删除失败"
            })
        }else{
            res.send({
                code : 0,
                message : "全部数据删除成功"
            })
        }
    })
});


//修改数据接口
router.get("/update",function (req,res,next) {
    cModel.update(req.query.f,req.query.c,function (error) {
        if(error){
            res.send({
                code : 5,
                message : "数据修改失败"
            })
        }else{
            res.send({
                code : 0,
                message : "数据修改成功"
            })
        }
    })
})

//模糊查询接口
router.get("/query",function (req,res,next) {
    cModel.find({name : new RegExp(req.query.name,"i")},function (error,data) {
        if(error){
            res.send({
                code : 4,
                message : "数据查询失败"
            })
        }else{
            res.send({
                code : 0,
                message : "数据查询成功",
                data : data
            })
        }
    })
})


module.exports = router;