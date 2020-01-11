/* 接收前台发送的数据，并存储在文件里面 */

//引入http模块
var http = require("http");
//引入fs模块
var fs = require("fs");
//引入url
var url = require("url");


//创建服务器
var server = http.createServer(function (request,response) {
    //设置允许跨域
    response.setHeader("Access-Control-Allow-Origin","*");

    //设置中文乱码问题
    response.writeHead(200,{"Content-Type" : "text/html; charset=utf8"});

    //接收前台发送过来的数据
    var data = request.url;

    //解析前台发送过来的数据
    var userData = url.parse(data,true).query;

    var obj = {
        data : []
    }

    {

    }
    //将前台发送过来的数据存储在数组里面
    obj.data.push(userData);

    //写入数据
    fs.writeFile("./lib/data.json",JSON.stringify(obj),"utf8",function (error) {
        if(error){
            console.log(error)
        }else{
            response.write("写入成功");
            response.end();
        }
    })




});
//设置监听的端口号
server.listen(3000,function () {
    console.log("http://localhost:3000");
})