var express=require("express");//引入express模块
var router=express.Router();//获取路由
//模拟注册池
var obj={
   name:"jack",pass:123456,
   name:"jack1",pass:123456,
   name:"jack2",pass:123456
};
router.use("/", function (req, res) {
   res.render("login");
});
router.use("/log", function (req,res) {
   res.send("这是文件路径");
   var data=req.body;
   console.log(data);
  for(var i=0;i<obj.length;i++){
     if(data.name==obj[i].name&&data.pass==obj[i].pass){
        res.send({//有点问题跟obj不相等
           code:0,
           title:"登录成功"
        })
     }else{
        res.send({
           code:1,
           title:"登录失败"
        })
     }
  }

});
module.exports=router;//导出路由