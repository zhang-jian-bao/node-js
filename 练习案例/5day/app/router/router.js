/**
 * Created by 0 on 2019-09-25.
 */
//二级路由
//引入express
var ex=require("express");
//获取router
var rt=ex.Router();
//配置二级路由
rt.use("/aa", function (req, res) {
    res.send("这是二级路由登录")
});
rt.use("/留言板练习数据库", function (req, res) {
    res.send("这是二级路由注册")
});
//导出路由
module.exports=rt;