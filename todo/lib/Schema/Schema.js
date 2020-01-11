//引入数据库服务器文件
var mongoose=require("../db/db");

//定义Schema
var Schema=mongoose.Schema({
    name:String,
    bool:Boolean
});
// 导出Schema
module.exports=Schema;