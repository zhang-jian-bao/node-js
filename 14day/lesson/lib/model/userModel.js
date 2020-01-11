//引入db.js
var mongoose = require("../db/db");

//引入userSchema.js文件
var userSchema = require("../schema/userSchema");


//创建模型
var userModel = mongoose.model("userModel",userSchema,"user");


//导出userModel
module.exports = userModel;
