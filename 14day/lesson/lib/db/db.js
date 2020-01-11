//引入mongoose模块
var mongoose = require("mongoose");

//连接数据库
mongoose.connect("mongodb://localhost/classA",function(error){
    if(error){
        console.log("数据库连接失败");
    }else{
        console.log("数据库连接成功");
    }
});

//导出mongoose
module.exports = mongoose;