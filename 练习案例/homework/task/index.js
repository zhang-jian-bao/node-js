/**
 * Created by 0 on 2019-09-26.
 */
//引入express模块
var ex=require("express");
//引入body-parser模块
var bo=require("body-parser");
//实列化
var se=new ex();
se.use(bo.json());
se.use(bo.urlencoded({extended:false}));
//引入fs 模块
var fs=require("fs");
//设置静态服务器
se.use(ex.static("./public"));
//引入路由文件
var rr=require("./rouer/api.js");
se.use("/api",rr);
//注册写入数据
se.post("/api/zc", function (req, res) {
    //获取前台请求的post方式的数据
    var data=req.body;
    fs.writeFile("./data/zc.json",JSON.stringify(data),"utf-8", function (err) {
        if(err){
            console.log(err+"注册写入错误");
        }else{
              res.send("写入成功");
        }
    })
});
//登录读取数据并判断
se.post("/api/login", function (req, res) {
   var da=req.body;
    fs.readFille("./data/zc.json","utf-8", function (err, data) {
        if(err){
            console.log(err);
        }else{
            var daa=JSON.parse(data);
            if(da.da==daa.za&&da.db==daa.zb){
                res.send("登录成功");
            }else{
                res.send("失败")
            }
        }
    })
});
//设置监听的端口号
se.listen(3000, function () {
    console.log("http://localhost:3000");
});