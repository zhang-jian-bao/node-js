//引入express
var express = require("express");

//获取路由router
var router = express.Router();

//引入定义模型的文件 userModel.js
var userModel = require("../lib/model/userModel");

//配置模版引擎的路由
router.get("/",function(req,res,next){
    userModel.find({},function(error,data){
        if(error){
            console.log(error)
        }else{
            res.render("index",{
                data : data
            });
        }
    })
})

//导出router
module.exports = router;