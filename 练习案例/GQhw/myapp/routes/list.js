var ex=require("express");//引入express模块
var router=ex.Router();//获取路由
router.use("/", function (req, res) {//设置路由
   res.render("list");//打开列表list.html文件
});
module.exports=router;//导出路由