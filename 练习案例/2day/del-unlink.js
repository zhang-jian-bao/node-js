/**
 * Created by 0 on 2019-09-20.
 */
//1.引入http模块
var ht=require("http");
//引入fs模块
var fs=require("fs");
//2.创建服务器
var se=ht.createServer(function (req, res) {
    //解决跨域问题
    res.setHeader("Access-Control-Allow-Origin","*");
    //解决中文乱码问题
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    //删除文件
    fs.unlink("./date/cccc.txt", function (err) {
        if(err){
            console.log(err);//因为打印了错误，所以cmd会显示
        }else{
            res.write("删除成功lala！");
            res.end();
        }
    })
});
//3.设置监听的端口号
se.listen(4344, function () {
    console.log("http://localhost:4344");
});
