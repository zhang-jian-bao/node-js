/**
 * Created by 0 on 2019-09-27.
 */
//引入express模块
var ex=require("express");
//引入fs模块，读取数据
var fs=require("fs");
//引入body-parser模块，用于post请求方式获取前台数据
var bo=require("body-parser");
//实例化
var se=new ex();
se.use(bo.json());
se.use(bo.urlencoded({extended:false}));
//设置静态资源服务器，ejs才能引入jquery插件
se.use(ex.static("./public"));
//指定视图引擎为ejs
se.set("views engine","ejs");
//指定模板的位置
se.set("views",__dirname+"/views");
//设置路由前台
se.get("/list", function (req, res, next) {
    //读取json中的数据返回给list.ejs
    var da=fs.readFileSync("./json/list.json","utf-8");
    //读取json中banner的轮播图文件数据返回给list.ejs
    var dd=fs.readFileSync("./json/banner.json","utf-8");
    res.render("list.ejs",{
        data:JSON.parse(da),
        cc:JSON.parse(dd)
    })
});
//设置后台路由列表添加，先读取后写入
se.get("/cc", function (req, res) {
   var da=req.query;
    console.log(da+"获取成功");
    var dat=fs.readFileSync("./json/list.json","utf-8");
    //dat读取数据是字符串要转换为对象
    var dd=JSON.parse(dat).list;
    dd.push(da.da);
    var obj={
        list:dd
    };
    fs.writeFile("./json/list.json",JSON.stringify(obj),"utf-8", function (err) {
        if(err){
            console.log(err+"写入错误卧槽");
        }else{
            res.send("写入成功");
        }
    });

});
//设置轮播图添加，先读取，在写入
se.get("/bb", function (req, res, next) {
   var ba=req.query;
    var bc=fs.readFileSync("./json/banner.json","utf-8");
    var bd=JSON.parse(bc).banner;
    bd.push(ba.da);
    var obj={
        banner:bd
    };
    fs.writeFile("./json/banner.json",JSON.stringify(obj),"utf-8", function (err) {
        if(err){
            console.log(err+"图片错误");
        }else{
            res.send("图片写入成功");
        }
    })
});
//设置后台路由
se.get("/hou", function (req, res, next) {
    res.render("hou.ejs");
});
//注册写入数据
se.post("/zc", function (req, res) {
    var dd=req.body;
    fs.writeFile("./json/zc.json",JSON.stringify(dd),"utf-8", function (err) {
        if(err){
            console.log(err+"注册写入错误");
        }else{
            res.send("注册写入成功")
        }
    })
});
//点击登录读取注册的数据并判断
se.post("/login", function (req, res) {
   //读取数据
   fs.readFile("./json/zc.json","utf-8", function (err, dada) {
       if(err){
           console.log(err+"deng");
       }else{
           //获取前台数据
           var za=req.body;
           //将读取到的数据转换为对象
           var zs=JSON.parse(dada);
           //判断
           if(za.name==zs.use&&za.pass==zs.pas){
               res.send("登录成功");
           }else{
               res.send("登录失败");
           }
       }
   });

});



//设置监听的端口号
se.listen(8080, function () {
    console.log("http://localhost:8080");
});