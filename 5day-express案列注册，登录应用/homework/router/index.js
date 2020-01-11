//引入express
var express = require("express");
//引入fs模块
var fs = require("fs");
//获取router
var router = express.Router();

//配置二级路由接口
router.use("/register",function (req,res) {
    //接收前台以post方式发送过来的数据
    var dataUser = req.body;

    //判断两次输入的密码是否一值
    if(dataUser.rPass == dataUser.realPass){
        //将获取到的数据写入到文件里面去
        fs.writeFile("./data/user.json",JSON.stringify(dataUser),"utf8",function (error) {
            if(error){
                console.log(error)
            }else{
                res.send({
                    code : 0,
                    message : "写入成功"
                })
            }
        })
    }else{
        res.send({
            code : 1,
            message : "密码不一致"
        })
    }
})

router.use("/login",function (req,res) {
   //接收前台以post方式发送过来的数据
   var userData = req.body;

   //读取注册的用户名和密码
    fs.readFile("./data/user.json","utf8",function (error,data) {
        if(error){
            console.log(error)
        }else{
            //获取注册的用户名和密码
            var user = JSON.parse(data);

            //判断前台发送过来的用户名和注册的用户名以及密码和注册的密码是否一致
            if(userData.name == user.rUser && userData.pass == user.rPass){
                res.send({
                    code : 0,
                    message : "登录成功"
                })
            }else{
                res.send({
                    code : 1,
                    message : "登录失败"
                })
            }
        }
    })

});

//导出router
module.exports = router;