/**
 * Created by 0 on 2019-09-22.
 */
//1.引入http模板
var ht=require("http");
//引入url模板
var url=require("url");
//引入fs模块
var fs=require("fs");
//2.创建服务器
var se=ht.createServer(function (req, res) {
    //解决跨域问题
    res.setHeader("Access-Control-Allow-Origin","*");
    //解决中文乱码问题
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    //解收前台数据
   var sj=req.url;
    //把前台数据是字符串转换成对象
    var ss=url.parse(sj,true).query;
    //把前台的数据写入文件储存
    var obj={
        data:[]
    };
    obj.data.push(ss);
    //同步写入数据
    fs.writeFile("./date/zjb.json",JSON.stringify(obj),"utf-8", function (err, dat) {
        if(err){
            console.log(err);
        }else{
            res.write("写入成功");
            res.end();
        }
    });
    //读取数据
    var aa=fs.readFile("./date/zjb.json","utf-8", function (err, adc) {
        if(err){
            console.log(err+"读取错误");
        }else{
            res.write("读取成功");
            res.end();
        }
    })
});
//3.设置监听的端口号
se.listen(9090, function () {
   console.log("http://localhost:9090");
});