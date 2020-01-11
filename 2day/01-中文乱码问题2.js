//1. 引入http模块
var http = require("http");

//2. 创建服务器
var server = http.createServer(function (request,response) {

    //5. 解决中文乱码问题
    response.writeHead(200,{"Content-Type" : "text/html; charset=utf-8"})


    //4. 给前台响应内容
    response.write("我想好好学习");
    response.end();

});


//3. 设置监听的端口号
server.listen(3000,function () {
    console.log("您的接口地址是：http://localhost:3000")
});