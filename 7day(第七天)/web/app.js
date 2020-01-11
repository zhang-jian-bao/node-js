//引入express
var express = require("express");

//实例化express
var app = new express();

//搭建静态资源服务器
// app.use(express.static("./public"));
app.use("/demo",express.static("./public"));


//设置监听的端口号
app.listen(8000,function () {
    console.log("http://localhost:8000");
})