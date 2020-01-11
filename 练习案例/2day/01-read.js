/**
 * Created by 0 on 2019-09-20.
 */
//1.引入http模块
var ht=require("http");
//7.引入fs模块
var fs=require("fs");
//2.创建服务器
var se=ht.createServer(function (req, res) {
//4.解决跨域问题
    res.setHeader("Access-Control-Allow-Origin","*");
    //5.解决中文乱码问题
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    //6.异步读取数据
    fs.readFile("./date/aa.txt","utf-8", function (err, data) {
        if(err){
            console.log(err);
        }else{
            res.write(data);
            res.end();
        }
    })
});
//3.设置监听的端口号
se.listen(6676, function () {
    console.log("http://localhost:6676");
});