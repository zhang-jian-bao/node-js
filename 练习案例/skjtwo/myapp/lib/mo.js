//引入mongoose模块
var mo=require("mongoose");
//创建数据库连接服务器
mo.connect("mongodb://127.0.0.1:27017/bao", function (err) {
    if(err){
        console.log("数据库连接失败！")
    }else{
        console.log("数据库连接成功！")
    }
});
//导出
module.exports=mo;