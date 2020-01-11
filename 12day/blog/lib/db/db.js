//引入mongoose模块
var mongoose = require("mongoose");

//连接数据库服务器
mongoose.connect("mongodb://localhost/test",function(error){
    if(error){
        console.log("数据库连接失败");
    }else{
        console.log("数据库连接成功");
    }
});

//导出mongoose模块
module.exports = mongoose;