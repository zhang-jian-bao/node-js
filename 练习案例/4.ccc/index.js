/**
 * Created by 0 on 2019-09-23.
 */
//1.引入http模块
var ht=require("http");
//引入url模块
var ur=require("url");
//引入lyw.js文件
var lywrite=require("./daochu/lyw.js");
//引入liuyanread.js文件
var lyread=require("./daochu/liuyanread.js");
//引入denglu.js 文件
var login=require("./daochu/denglu.js");


//2.创建服务器
var se=ht.createServer(function (req, res) {
    //解决跨域问题
    res.setHeader("Access-Control-Allow-Origin","*");
    //解决中文乱码问题
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    //获取/api/banner
    var path=ur.parse(req.url,true).pathname;
   if(path=="/api/banner"){
       //console.log(path);
     //读取数据
       fs.readFile("./json/index.json","utf-8", function (err, dat) {
           if(err){
               console.log(err+"读取错误");
           }else{
               res.write(dat);
               res.end();
           }
       })
   }
    //留言板写入数据
    if(path=="/api/list"){
     lywrite(req,res);
    }
    //留言板读取数据
    if(path=="/api/write"){
     lyread(res);
    }
    //登录读取注册里的数据
    if(path=="/api/dd"){
     login(req,res);
        //if(daa.name==obj.name&&daa.pass==obj.pass){
        //    res.write("登录成功");
        //    res.end();
        //}else{
        //    console.log("报错");
        //}
    }
    //注册写入数据

    if(path=="/api/zc"){
        req.on("data", function (data) {
            str+=data;
        });
        req.on("end", function () {
            var oq=qu.parse(str);
            console.log(oq);
            fs.readFile("./json/zc.json","utf-8",function(err,data){
                if(err){
                    console.log(err)
                }else{
                    var o= JSON.parse(data);
                    o.data.push(oq);
                    fs.writeFile("./json/zc.json",JSON.stringify(o),"utf-8",function(err){
                        if(!err){
                            res.write("注册成功");
                            res.end()
                        }else {
                            res.write("注册失败");
                            res.end()
                        }
                    })

                }
            })

        });


    }
});
//3.设置监听的端口号
se.listen(3000, function () {
    console.log("http://localhost:3000/api/...");
});