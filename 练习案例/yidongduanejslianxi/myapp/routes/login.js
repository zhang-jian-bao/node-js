var express = require('express');
var router = express.Router();
var fs=require("fs");
/* GET home page. */
router.get('/login', function(req, res, next) {
    res.render('login');
});
router.post("/dologin", function (req, res) {
   var da=req.body;
    console.log(da);
fs.readFile("./json/data.json","utf-8", function (err,data) {
    if(err){
        res.send(err);
    }else{
     var dd=JSON.parse(data);
        if(da.a==dd.a&&da.b==dd.b){
            res.send("成功");
            //res.redirect("/success")//可以直接后台跳转页面
        }else{
            res.send("失败");
            //res.redirect("/login)//可以直接后台跳转页面
        }
    }
});
    //fs.writeFile("./json/data.json",JSON.stringify(da), function (err) {
    //    if(err){
    //        res.end(err+"错误")
    //    }else{
    //        res.send("成功");
    //
    //    }
    //})
});
router.get("/success", function (req, res) {
    fs.readFile("./json/data.json","utf-8", function (err, data) {
        if(err){
            res.send(err);
        }else{
            res.send(data);
        }
    })
});
module.exports = router;
