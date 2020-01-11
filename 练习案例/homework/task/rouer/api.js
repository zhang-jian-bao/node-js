/**
 * Created by 0 on 2019-09-26.
 */
//引入express模块
var ex=require("express");
//引入fs模块
var fs=require("fs");
//获取路由
var rt=ex.Router();
//设置路由
rt.use("/banner", function (req, res) {
    //读取文件轮播图
   fs.readFile("./data/banner.json","utf-8", function (err, dat) {
       if(err){
           console.log(err+"读取错误");
       }else{
           console.log(dat);
           res.send(dat);
       }
   })
});
//先读取数据，在写入数据轮播图
//rt.use("/bannerwrite", function (req,res) {
//    //读取数据
//    var data=req.query;
//    var da=fs.readFileSync("./data/banner.json","utf-8");
//    console.log(da);
//    var daa=JSON.parse(da).banner;
//    console.log(daa);
//    var dcc=daa.b;
//    var ddd=daa.img;
//    console.log(daa);
//    ddd.push(data.img);
//   dcc.push(data.b);
//    var obj={
//        img:ddd,
//        b:dcc
////    };
//    //写入数据
//    fs.writeFile("./data/ban.json",JSON.stringify(obj),"utf-8", function (err) {
//        if(err){
//            console.log(err+"写入错误");
//        }else{
//            res.send("写入成功");
//        }
//    })
//});
rt.use("/read", function (req, res) {
    //读取列表文件
    fs.readFile("./data/ban.json","utf-8", function (err, dat) {
        if(err){
            console.log(err+"读取错误");
        }else{
            console.log(dat);
            res.send(dat);
        }
    })
});
//先读取数据，在写入数据
rt.use("/write", function (req,res) {
    //读取数据
    var data=req.query;
    var da=fs.readFileSync("./data/ban.json","utf-8");
    var daa=JSON.parse(da).list;
    daa.push(data.name);
    var obj={
        list:daa
    };
    //写入数据
    fs.writeFile("./data/ban.json",JSON.stringify(obj),"utf-8", function (err) {
        if(err){
            console.log(err+"写入错误");
        }else{
            res.send("写入成功");
        }
    })
});

//导出路由
module.exports=rt;