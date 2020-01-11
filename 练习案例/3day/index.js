/**
 * Created by 0 on 2019-09-23.
 */
//1.引入http模块
var ht=require("http");
//引入URL模块
var ur=require("url");
//引入fs模块
var fs=require("fs");
//2.创建服务器
var se=ht.createServer(function (req, res) {
    //解决跨域问题
    res.setHeader("Access-Control-Allow-Origin","*");
    //解决中文乱码问题
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    //获取/api/banner   console.log(req.url)
    var path=ur.parse(req.url).pathname;
    //判断/api/banner是否跟HTML中ajax渲染banner的路径是否相同
    if(path=="/api/banner"){
        //console.log("成功")
        //读取前台请求数据
        fs.readFile("./json/index.json","utf-8", function (err, data) {
            if(err){
                console.log(err+"错误");
            }else{
                res.write(data);
                res.end();
            }
        })
    }
    //留言板写入数据
    if(path=="/api/list"){
        var da=req.url;
        console.log(da);
        var ss=ur.parse(da,true).query;
        fs.writeFile("./json/zjb.json",JSON.stringify(ss),"utf-8", function (err, dat) {
            if(err){
                console.log(err+"留言错误");
            }else{
                res.write("写入成功");
                res.end();
            }
        })
    }
    //读取数据
    if(path=="/api/show"){
        fs.readFile("./json/zjb.json","utf-8", function (err, data) {
            if(err){
                console.log(err+"显示错误");
            }else{
                res.write(data+"读取成功");
                res.end();
            }
        })
    }
});
//3.设置监听的端口号
se.listen(3000, function () {
    console.log("http://localhost:3000");
});