var express = require("express");

var router = express.Router();

var classModel = require("../lib/model/classModel");

router.get("/",function (req,res,next) {
    classModel.find({},function (error,data) {
        if(error){
            console.log("读取数据失败");
        }else{
            res.render("index",{
                user : data
            })
        }
    });
});

router.get("/api/register",function (req,res,next) {
    //接收前台发送过来的数据
    var data = req.query;

    //将前台发送过来的数据存储到数据库
    //实例化模型
    var model = new classModel(data);
    
    //进行存储
    model.save(function (error,docs) {
        if(error){
            console.log("写入失败")
        }else{
            res.render("index")
            // res.send({
            //     code : 0,
            //     message : "写入成功"
            // })
        }
    })
})

module.exports = router;