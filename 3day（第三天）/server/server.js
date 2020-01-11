//1. 引入http模块
var http = require("http");
//2. 引入fs模块
var fs = require("fs");
//3. 引入url模块
var url = require("url");

//2. 创建服务器
var server = http.createServer(function (request,response) {
    //设置允许跨域
    response.setHeader("Access-Control-Allow-Origin","*");
    //设置中文乱码
    response.writeHead(200,{"Content-Type": "text/html; charset=utf8"});

    var path = url.parse(request.url).pathname;

    //判断请求的接口是不是api/banner,如何是api/banner 那么则读取数据
    if(path == "/api/banner"){
        fs.readFile("./data/banner.json","utf-8",function (error,data) {
            if(error){
                console.log(error)
            }else{
                response.write(data);
                response.end();
            }
        })
    }

    //判断请求热接口是不是/api/write, 如果是/api/write那么则写入数据

    if(path == "/api/write"){
        var data = url.parse(request.url,true).query;
        fs.writeFile("./data/write.json",JSON.stringify(data),"utf8",function (error) {
            if(error){
                console.log(error);
            }else{
                response.write("写入成功");
                response.end();
            }
        })
    }
});

//3. 设置监听的端口号
server.listen(3000,function () {
    console.log("http://localhost:3000");
})