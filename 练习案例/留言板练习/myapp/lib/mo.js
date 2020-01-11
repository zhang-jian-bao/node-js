//引入mongoose模块
var mo=require("mongoose");
//连接数据库服务器
mo.connect("mongodb://localhost/bao",function (er) {
    if(er){
        console.log("数据库连接失败")
    }else{
        console.log("数据库连接成功")
    }
});
//导出
module.exports=mo;