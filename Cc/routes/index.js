//引入express
var express = require("express");
//获取router
var router = express.Router();

//配置接口渲染模版引擎
router.get("/",function (req,res,next) {
    res.render("index");
})

//导出router
module.exports = router;