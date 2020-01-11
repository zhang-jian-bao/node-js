//引入http模块
var http = require("http");
//引入url模块
var url = require("url");
//引入fs模块
var fs = require("fs");
//引入querystring
var querystring = require("querystring");
//创建服务器
var server = http.createServer(function (request,response) {

    //设置解决跨域问题
    response.setHeader("Access-Control-Allow-Origin","*");

    //设置解决中文乱码问题
    response.writeHead(200,{"Content-Type" : "text/html;charset=utf8"});

    //获取地址栏的url
    var path = url.parse(request.url).pathname;

    //路由的判断
    if(path == "/"){
        response.write("hello world");
        response.end();
    }else if(path == "/api/banner"){
        //读取数据
        fs.readFile("./data/a.json","utf8",function (error,data) {
            if(error){
                console.log(error)
            }else{
                response.write(data);
                response.end()
            }
        })

    }else if(path == "/api/login"){

        //接收前台发送过来的数据 -- 登陆的用户名和登陆的密码
        var str = "";
        request.on("data",function (data) {
            str += data
        });
        request.on("end",function () {
            //解析前台发送过来的用户名和密码
            var userData = querystring.parse(str);

            //读取注册的用户名和密码
            fs.readFile("./data/reg.json","utf8",function (error,data) {
                if(error){
                    console.log(error)
                }else{
                    //保存的是注册的用户名和密码
                    var regData = JSON.parse(data);

                    //判断前台发送的过来的登陆用户名和密码 与 注册的用户名和密码是否一直
                    if(userData.username == regData.name && userData.userpass == regData.pass){
                        response.write("登录成功")
                        response.end()
                    }else{
                        response.write("登录失败")
                        response.end()
                    }
                }
            })
        })



    }else if(path == "/api/register"){

        //初始化一个变量，用来保存前台以post 方式发送过来的数据
        var str = "";
        //接收数据
        request.on("data",function (data) {
            str += data;
        });
        //接收结束
        request.on("end",function () {
            //解析数据 -- 新的注册数据
            var data = querystring.parse(str);
            //将解析的数据存储到文件里面
            fs.writeFile("./data/reg.json",JSON.stringify(data),"utf8",function (error) {
                if(error){
                    console.log(error)
                }else{
                    response.write("写入成功");
                    response.end();
                }
            })
        })
    }

});
//设置监听的端口号
server.listen(3000,function () {
    console.log("http://localhost:3000")
});