/**
 * Created by 0 on 2019-09-20.
 */
//同步，异步读取数据
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
    //异步读取数据
    //fs.readFile("./date/dome.txt","utf-8",function(err,dat){
    //    if(err){
    //        console.log(err);
    //    }else{
    //        res.write(dat);
    //        res.end();
    //    }
    //})
    //同步读取数据
    try{//输出成功的数据
        var dat=fs.readFileSync("./date/dome.txt","utf-8");
        res.write(dat);
        res.end();
        }catch(e){
        console.log(e);//输出错误的数据
    }
});
//3.设置监听的端口号
se.listen(4040, function () {
    console.log("http://localhost:4040");
});