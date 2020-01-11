var ex=require("express");//引入express模块
var router=ex.Router();//获取路由
router.use("/", function (req, res) {//设置路由
    res.render("core.html");//打开core.html文件
});
module.exports=router;//导出路由