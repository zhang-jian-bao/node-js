//引入mongoose文件
var mo=require("mongoose");
//连接数据库服务器数据
mo.connect("mongodb://localhost/bao",function (err) {
    if(err){
        console.log("数据库连接失败")
    }else{
        console.log("数据库连接成功")
    }
});
//导出
module.exports=mo;