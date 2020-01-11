/**
 * Created by 0 on 2019-09-20.
 */
//1.引入http模块
var ht=require("http");
//引入fs文件
var fs=require("fs");
//2.创建服务器
var se=ht.createServer(function (req, res) {
    //解决跨域问题
    res.setHeader("Access-Control-Allow-Origin","*");
    //解决中文乱码问题
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    //同步写入文件
    fs.writeFile("./date/dome.txt","我是新建的异步文件","utf-8", function (err) {
        if(err){
            console.log(err);
        }else{
            res.write("写入成功！");
            res.end();
        }
    })
});
//3.设置监听的端口号
se.listen(3232, function () {
    console.log("http://localhost:3232");
});