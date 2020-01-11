//引入express
var express = require("express");

//获取到router
var router = express.Router();


//配置路由
router.use("/banner",function (req,res) {
    res.send("banner");
})


//导出router
module.exports = router