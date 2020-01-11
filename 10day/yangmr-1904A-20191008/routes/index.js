var express = require("express");

var router = express.Router();

var fs = require("fs");


router.post("/dologin",function (req,res,next) {

    var obj = JSON.parse(fs.readFileSync("./data/data.json","utf8"))

    var data = req.body;

    for(var i=0;i<obj.users.length;i++){
        if(obj.users[i].name == data.name && obj.users[i].pass == data.pass){

            res.redirect("/success")

            // res.send({
            //     code : 0,
            //     message : "登录成功"
            // })
        }else{

            res.redirect("/login")


            // res.send({
            //     code : 1,
            //     message : "登录失败"
            // })
        }
    }
})

router.get("/login",function (req,res,next) {
    res.render("login")
})

router.get("/success",function (req,res,next) {
    res.render("about")
})

module.exports = router;