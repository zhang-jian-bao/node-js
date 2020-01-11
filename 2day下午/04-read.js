//引入http模块
var http = require("http");
//引入fs模块
var fs = require("fs");

//使用http模块创建服务器
var server = http.createServer(function (request,response) {

    //设置解决中文乱码问题
    response.writeHead(200,{"Content-Type" : "text/html; charset=utf8"})


    //读取指定文件的内容  a.txt
    fs.readFile("./data/a.txt","utf-8",function (error,data) {
        //判断读取的时候有没有错误，如果有错误，则输出错误， 如果没有错误，则将读取的数据响应到浏览器
        if(error){
            console.log(error);
        }else{
            response.write(data);
            response.end();
        }
    })

})

//设置监听的端口号
server.listen(3000,function () {
    console.log("http://localhost:3000")
})