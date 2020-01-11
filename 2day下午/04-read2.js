//引入http模块
var http = require("http");
//引入fs模块
var fs = require("fs");

//使用http模块创建服务器
var server = http.createServer(function (request,response) {

    //设置解决中文乱码问题
    response.writeHead(200,{"Content-Type" : "text/html; charset=utf8"})


    //读取指定文件的内容  a.txt
    try{
        //同步读取
       var data = fs.readFileSync("./data/a.txt","utf-8");
       if(data){
           response.write(data);
           response.end();
       }
    }catch (e) {
        console.log(e)
    }

})

//设置监听的端口号
server.listen(3000,function () {
    console.log("http://localhost:3000")
})