/**
 * Created by 0 on 2019-09-25.
 */
//引入express模块
var ex=require("express");
//引入body-parser模块
var pa=require("body-parser");
//引入router.js文件,也就是路由文件
var rr=require("./../router/router.js");
//实列化express
var se=new ex();
se.use(pa.json());
se.use(pa.urlencoded({extended:false}));
//配置接口
//让一级路由加载二级路由
se.use("/api",rr);
//搭建express服务器
se.get("/:id", function (req, res, next) {
//解决跨域问题
    res.setHeader("Access-Control-Allow-Origin","*");
    //获取前台get方式请求的数据
    console.log(req.query);
    console.log(req.params);//获取路由的id数如id：123
    res.send("这是get的请求页面");
});
se.post("/api/cc/:id", function (req, res) {
    //解决跨域问题
    res.setHeader("Access-Control-Allow-Origin","*");
    //获取前台post方式请求的数据
    console.log(req.body);
    console.log(req.params);
    res.send("这是post的请求页面！");
});
se.use("/api/list", function (req, res) {
    //解决跨域问题
    res.setHeader("Access-Control-Allow-Origin","*");
    res.send("这是get和post请求方式都可以")
});
//设置监听的端口号
se.listen(8080, function () {
    console.log("http://localhost:8080");
});