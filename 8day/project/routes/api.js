//引入express
var express = require("express")
//获取router
var router = express.Router();

//模拟用户注册池
var obj = [
    {name : "jack",pass : "123456"},
    {name : "jack1",pass : "123456"},
    {name : "jack2",pass : "123456"},
]

//配置
router.use("/login",function (req,res,next) {
    console.log(req.body)
    for(var i=0;i<obj.length;i++){
        if(obj[i].name == req.body.user && obj[i].pass == req.body.pass){
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

//导出router
module.exports = router