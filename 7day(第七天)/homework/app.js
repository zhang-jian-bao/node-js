//引入express
var express = require("express");

//引入fs模块
var fs = require("fs");

//实例化express
var app = new express();

//搭建静态资源服务器
app.use(express.static("./public"));



//指定视图的模版引擎为ejs
app.set("view engine","ejs");

//指定模版位置
app.set("views",__dirname + "/views");

//配置路由
app.get("/",function (req,res,next) {
    //获取list.json的数据
    fs.readFile("./data/list.json","utf8",function (error,data) {
        if(error){
            console.log(error);
        }else{
            res.render("index",{
                list : JSON.parse(data)
            });
        }
    })
});

app.get("/admin",function (req,res,next) {
    res.render("admin");
})

//设置监听的端口号
app.listen(3000,function () {
    console.log("http://localhost:3000")
})
