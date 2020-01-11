//1. 引入http模块
var http = require("http");
//8. 引入url模块
var url = require("url");

//创建注册的用户名和密码
var obj = {
    name : "jack",
    pass : "123456"
};

//2. 创建服务器
var server = http.createServer(function (request,response) {

    //4. 设置解决跨域问题
    response.setHeader("Access-Control-Allow-Origin","*");

    //3. 设置解决中文乱码问题
    response.writeHead(200,{"Content-type" : "text/html; charset=utf8"});



    //5. 接收前台发送过来的数据
    var data = request.url;

    //7. 解析字符串 {user : "jack", pass : "123"}
    var userData = url.parse(data,true).query;

    //8.判断前台发送过来的用户名和密码是否和注册的用户名和密码是否一致
    if(userData.user == obj.name && userData.pass == obj.pass){
        //6. 将接收到的数据响应到浏览器页面
        response.write("登陆成功");
        response.end();
    }else{
        response.write("登陆失败");
        response.end();
    }



});

//3. 设置监听的端口号
server.listen(3000,function () {
    console.log("http://localhost:3000")
})

