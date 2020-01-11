//引入mongoose模块
var mo=require("mongoose");
//连接数据库服务器
mo.connect("mongodb://localhost/bao",function (err) {
    if(err){
        console.log("连接数据库失败")
    }else{
        console.log("连接数据库成功")
    }
});
//导出
module.exports=mo;