/**
 * Created by 0 on 2019-09-27.
 */
//引入express模块
var ex=require("express");
//引入fs模块
var fs=require("fs");
//把ejs的后缀名改成html，1.要先引入ejs模块
var ejs=require("ejs");
//实列化
var se=new ex();
//2.
se.engine("html",ejs.__express);
//3.
se.set("views engine","html");
//指定视图的模板引擎为ejs
//se.set("views engine","ejs");
//指定模板引擎的位置
se.set("views",__dirname+"/views");
//配置路由
se.get("/a", function (req, res) {
    //在a.ejs中可以输出hello world
    res.render("a.html",{
        data:"hello world"
    })
});
se.get("/b", function (req, res) {
    //在b.ejs中可以输出hello world
    res.render("b.ejs",{
        tak:["德玛西亚","后裔","不告诉你"],
        fig:true
    })
});
se.get("/c", function (req, res) {
    //读取json中的数据
    fs.readFile("./json/zjb.json","utf-8", function (err, da) {
        if(err){
            console.log(err+"读取文件错误");
        }else{
            res.render("c.ejs",{
                title:"欢迎来到c.ejs文件页面",
              data:JSON.parse(da),
                fig:true
            })
        }
    })

});
//设置监听的端口号
se.listen(3000, function () {
   console.log("http://localhost:3000");
});