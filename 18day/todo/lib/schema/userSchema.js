//引入连接数据库的文件 db.js
var mongoose = require("../db/db");

//引入moment.js
var moment = require("moment");

//定义schema
var userSchema = mongoose.Schema({
    "text" : String,
    "checked" : Boolean,
    "date" : {
        type: Date,
        default: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
    }
});

//导出userSchema
module.exports = userSchema;