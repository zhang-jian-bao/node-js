//引入express
var express = require("express");

//对express进行实例化
var app = new express();

//引入body-parser中间件，为什么引入他，引入不引入他无法接收前台以post方式发送过来的数据
var bodyParser = require("body-parser");
//将接收到的数据转换成json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

//搭建静态资源服务器
app.use(express.static("./public"));

//引入二级路由文件
var indexRouter = require("./router/index")
var vRouter = require("./router/v");

//将二级路由注册到一级路由
app.use("/api",indexRouter)
app.use("/v1",vRouter)

//设置监听的端口号
app.listen(8888,function () {
    console.log("http://localhost:8888");
})