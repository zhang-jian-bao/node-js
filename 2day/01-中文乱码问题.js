//1. 引入http模块
var http = require("http");

//2. 创建服务器
var server = http.createServer(function (request,response) {

    //4. 给前台响应内容
    response.write("hello world");
    response.end();

});


//3. 设置监听的端口号
server.listen(3000,function () {
    console.log("您的接口地址是：http://localhost:3000")
});