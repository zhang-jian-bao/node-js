/**
 * Created by 0 on 2019-09-20.
 */
//1.引入http
var ht=require("http");
//引入querystring
var qq=require("querystring");
var obj={
    use:"jack",
    mm:12345
};
//2.创建服务器
var se=ht.createServer(function (req, res) {
    //解决跨域问题
    res.setHeader("Access-Control-Allow-Origin","*");
    //解决中文乱码问题
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    //接受前台数据

    //post请求方式
    var str='';
    req.on("data", function (data) {
        str=str+data;
    });
    req.on("end", function () {
        console.log(str);
        //把post方式字符串解析成对象
        var ss=qq.parse(str);
        if(ss.name==obj.use&&ss.mm==obj.mm){
            res.write("登录成功");
            res.end();
        }else{
            res.write("登录失败！");
            res.end();
        }
    })

})
//3.设置监听的端口号
se.listen(9090, function () {
    console.log("http://localhost:9090");
})