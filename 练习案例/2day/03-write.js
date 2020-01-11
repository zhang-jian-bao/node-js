/**
 * Created by 0 on 2019-09-20.
 */
//1.引入http模块
var ht=require("http");
//引入fs模块
var fs=require("fs");
//2.创建服务器
var se=ht.createServer(function (req, res) {
    //解决跨域问题
    res.setHeader("Access-Control-Allow-Origin","*");
    //解决中文乱码问题
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    //异步写入数据
    //fs.writeFile("./date/留言板练习数据库.txt","我是新写入的异步文件","utf-8", function (err) {
    //    if(err){
    //        console.log(err);
    //    }else{
    //        res.write("写入成功1");
    //        res.end();
    //    }
    //})

    //同步写入数据
    var obj={
          use:"好难！"
    };
    try{
        var dat= fs.writeFileSync("./date/dd.json",JSON.stringify(obj),"utf-8");
        res.write("写入成功啦啦！");
        res.end();
    }catch(e){
        console.log(e);
    }


});
//3.设置监听的端口号
se.listen(4090, function () {

    console.log("http://localhost:4090");
});