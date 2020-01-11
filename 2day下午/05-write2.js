//引入http模块
var http = require("http");
//引入fs模块
var fs = require("fs");
//创建服务器
var server = http.createServer(function (request,response) {
    //设置解决中文乱码问题
    response.writeHead(200,{"Content-Type" : "text/html; charset=utf8"})

    //给文件写入数据
    try{
        fs.writeFileSync("./data/mock.json",'{"name" : "jack", "age" : 20}',"utf8");
        response.write("写入成功");
        response.end();
    }catch (e) {
        console.log(e)
    }
});
//设置监听的端口号
server.listen(3000,function () {
    console.log("http://localhost:3000");
})