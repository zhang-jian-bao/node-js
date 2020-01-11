//引入数据库服务器文件
var mongoose=require("../db/db");

//引入定义的Schema文件
var Schema=require("../Schema/Schema");

//定义数据文件
var Model=mongoose.model("Model",Schema,"list1");

//导出数据库模型
module.exports=Model;