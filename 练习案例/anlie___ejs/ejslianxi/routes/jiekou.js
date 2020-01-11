var express=require("express");
var router=express.Router();
var fs=require("fs");
//注册要写入
router.post("/zc", function (req, res) {
    //var data=fs.readFileSync("./json/zc.json","utf-8");
    var da=req.body;
    //var dd=JSON.parse(data);
    //dd.push(da);
    //console.log(da);
    //var obj={
    //    list:dd
    //};
    fs.writeFile("./json/zc.json",JSON.stringify(da),"utf-8", function (err) {
        if(err){
            res.send("错误");
        }else{
            res.send("good!good!");
        }
    })
});
//登录读取
router.post("/login", function (req, res) {
    fs.readFile("./json/zc.json","utf-8", function (err, data) {
        if(err){
            res.send(err+"读取错误");
        }else{
            var da=JSON.parse(data);
            var ds=req.body;
            if(ds.name==da.yh&&ds.pas==da.pa){
                res.send("登录成功");
            }else{
                res.send("登录失败");
            }
        }
    })
});
module.exports=router;