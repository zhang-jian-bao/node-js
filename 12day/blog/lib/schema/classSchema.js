//引入连接数据库的文件，也就是 db.js文件
var mongoose = require("../db/db");

//定义Schema
var classSchema = mongoose.Schema({
    id : Number,
    name : String,
    age : String,
    sex : String
});

//导出Schema
module.exports = classSchema;