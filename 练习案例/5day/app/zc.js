/**
 * Created by 0 on 2019-09-25.
 */
//引入express模块
var ex=require("express");
//引入body-parser模块
var bo=require("body-parser");
//引入fs模块
var fs=require("fs");
//实例化
var se=new ex();
se.use(bo.json());
se.use(bo.urlencoded({extended:false}));
//创建服务器
//配置静态资源服务器
se.use(ex.static("public"));
//注册页面写入数据
se.post("/write", function (req, res) {
    //解决跨域问题
    res.setHeader("Access-Control-Allow-Origin","*");
    //获取前台post的方式请求的数据
    var da=req.body;
    fs.writeFile("./json/zc.json",JSON.stringify(da),"utf-8", function (err) {
        if(err){
            console.log(err+"写入错误");
        }else{
            res.send("写入成功");
        }
    })
});
//登录读取json/zc.json数据，判断
se.post("/read", function (req, res) {
    //解决跨域问题
    res.setHeader("Access-Control-Allow-Origin","*");
   fs.readFile("./json/zc.json","utf-8", function (err, dat) {
       if(err){
           console.log(err+"读取数据失败");
       }else{
           var data=JSON.parse(dat);
           var dada=req.body;
           if(dada.yh==data.yh&&dada.ma==data.ma){
               res.send("登录成功");
           }else{
               res.send("登录失败");
           }
       }
   })
});
//设置监听的端口号
se.listen(3000, function () {
    console.log("http://localhost:3000");
});