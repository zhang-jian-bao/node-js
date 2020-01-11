//引入http模块
var http = require("http");
//引入fs模块
var fs = require("fs");

//创建服务器
var server = http.createServer(function (request,response) {
    //设置解决中文乱码问题
    response.writeHead(200,{"Content-Type": "text/html;charset=utf8"});

    //删除文件
    fs.unlink("./data/demo.txt",function (error) {
        if(error){
            console.log(error)
        }else{
            response.write("删除成功");
            response.end();
        }
    })
});
//设置监听的端口号
server.listen(3000,function () {
    console.log("http://localhost:3000");
})
