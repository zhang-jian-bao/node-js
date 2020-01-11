var ex=require("express");
var router=ex.Router();
var fs=require("fs");
router.use("/login", function (req, res, next) {
   res.render("login")
});
router.post("/dologin", function (req, res, next) {
   var da=fs.readFile("./json/login.json","utf-8" );
    var qt=req.body;
    var ht=JSON.parse(da);
    console.log(qt);
    console.log(ht);
    for(var i=0;i<ht.list.length;i++){
        if(qt.yh==ht.list[i].yh&&qt.mm==ht.list[i].mm){
            res.send("成功");

            //res.redirect("/");
        }else{
            res.send("失败");
            //res.redirect("/login");
        }
    }

});
module.exports=router;