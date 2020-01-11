/**
 * Created by 0 on 2019-09-20.
 */
//1.引入http
var ht=require("http");
//8.引入url
var ur=require("url");
//10.后台注册的用户名和密码
var obj={
    use:"jack",
    pas:1234
};
//2.创建服务器
var se=ht.createServer(function (req, res) {
 //4.解决跨域问题
    res.setHeader("Access-Control-Allow-Origin","*");

    //5.解决中文乱码问题
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

    //7.请求前台数据
    var dat=req.url;

    //9.将字符串转化成对象
    var qu=ur.parse(dat,true).query;
    //console.log(qu)
    //11.判断
    if(qu.name==obj.use&&qu.mm==obj.pas){
        //console.log("登录成功");
        //6.给前台响应内容
        res.write("登录成功");
        res.end();
    }else{
        //console.log("登录失败");
        //6.给前台响应内容
        res.write("登录失败");
        res.end();
    }


})
//3.设置监听的端口
se.listen(8060, function () {
    console.log("http://localhost:8060")
})