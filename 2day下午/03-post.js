//1. 引入http模块
var http = require("http");
//7. 引入querystring模块
var querystring = require("querystring");
//用户注册的数据
var obj = {
    name : "nick",
    pass : 123
};


//2. 通过http模块创建服务器
var server = http.createServer(function (request,response) {
    //4. 设置解决跨域问题
    response.setHeader("Access-Control-Allow-Origin","*");

    //5. 设置中文乱码
    response.writeHeader(200,{"Content-Type" : "text/html;charset=utf8"});

    //6. 接收前台以post方式发送过来的数据
    // 6.1 初始化一个变量，用来保存接收到的数据
    var str = "";

    // 6.2 开始接收
    request.on("data",function (data) {
        str = str + data // str += data
    });

    // 6.3 接收结束
    request.on("end",function () {
        //8. 将字符串解析为对象
        var userData = querystring.parse(str);

        //9. 判断前台发送过来的用户名和密码和注册的用户名和密码是否一直
        if(userData.user == obj.name && userData.pass == obj.pass){
            response.write("登陆成功");
            response.end();
        }else{
            response.write("登陆失败");
            response.end();
        }
    })


});
//3. 设置监听的端口号
server.listen(8888,function () {
    console.log("http://localhost:8888")
})