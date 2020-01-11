//引入连接数据库服务器的文件 db.js
var mongoose = require("../db/db");
//引入schema文件
var classSchema = require("../schema/classSchema");
//定义模型
var classModel = mongoose.model("classModel",classSchema,"class");
//导出模型
module.exports = classModel;