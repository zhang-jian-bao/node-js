//1. 引入http模块
var http = require("http");


//2.创建服务器  create创建 Server服务器  request 接收前台的数据  请求  response  给前台响应的数据   响应

	var server = http.createServer(function (request,response) {
   
	 //允许跨域
    response.setHeader("Access-Control-Allow-Origin","*");
   
	 //响应写入 hello
    response.write("hello world");
   
	 //响应结束
    response.end();
    
		console.log("正在访问服务器")

	});


//3.设置监听的端口号  4位   不能小于3000
	
server.listen(8000);


