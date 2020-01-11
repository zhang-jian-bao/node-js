var mo=require("mongoose");
mo.connect("mongodb://localhost/bao", function (err) {
    if(err){
        console.log("数据库连接失败")
    }else{
        console.log("数据库连接成功")
    }
});
module.exports=mo;