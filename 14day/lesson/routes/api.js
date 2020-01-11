//引入express
var express = require("express");

//引入userModel.js
var userModel = require("../lib/model/userModel");

//获取路由router
var router = express.Router();

//配置模版引擎的路由

//读取数据
router.get("/read",function(req,res,next){
    userModel.find({},function (error,data) {
        if(error){
            res.send({
                code : 2,
                message : "数据获取失败"
            })
        }else{
            res.send({
                code : 0,
                message : "数据获取成功",
                data : data
            })
        }
    })
});

//添加数据到数据库的接口
router.get("/write",function (req,res,next) {
    //获取到前台发送过来的数据
    var data = req.query;

    //存储数据
    var model = new userModel(data);

    model.save(function (error,docs) {
        if(error){
            res.send({
                code : 1,
                message : "数据存储失败"
            });
        }else{
            res.send({
                code : 0,
                message : "数据存储成功"
            })
        }
    })

})

//删除全部数据
router.get("/delAll",function (req,res,next) {
    userModel.remove({},function (error) {
        if(error){
            res.send({
                code : 3,
                message : "删除所有数据失败"
            })
        }else{
            res.send({
                code : 0,
                message : "删除所有数据成功"
            })
        }
    })
});

//删除单条数据
router.get("/del",function (req,res,next) {
    console.log(req.query)

    userModel.remove(req.query,function (error) {
        if(error){
            res.send({
                code : 4,
                message : "数据删除失败"
            })
        }else{
            res.send({
                code : 0,
                message : "数据删除成功"
            })
        }
    })
})



//导出router
module.exports = router;