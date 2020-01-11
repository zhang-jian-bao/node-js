//引入mongoose模块
var mongoose=require("mongoose");

//设置数据库服务器
mongoose.connect("mongodb://127.0.0.1:27017/todo",function (err) {
    if(err){
        console.log(err);
    }else {
        console.log("mongodb连接成功");
    }
});

//导出数据库服务器
module.exports=mongoose;