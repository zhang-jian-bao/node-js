//引入http模块
var http = require("http");
//创建服务器
var server = http.createServer(function (request,response) {
    response.write("hello world");
    response.end();
});
//设置监听的端口号
server.listen(3000,function () {
    console.log("http://localhost:3000")
})