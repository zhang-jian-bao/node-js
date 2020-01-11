/**
 * Created by 0 on 2019-09-27.
 */
//引入express
var ex=require("express");
//实例化
var se=new ex();
//搭建静态的服务器
//se.use(ex.static("./public"));
//搭建静态服务器并加一个虚拟的文件夹
se.use("/demo",ex.static("./public"));
//在浏览器打开是要输入localhost:3000/demo/index.ejs
//设置监听的端口号
se.listen(3000, function () {
   console.log("http://localhost:3000");
});