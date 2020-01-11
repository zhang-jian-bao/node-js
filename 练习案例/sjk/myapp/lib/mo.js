var mo=require("mongoose");
mo.connect("mongodb://127.0.0.1:27017/bao", function (err) {
    if(err){
        console.log("数据连接失败")
    }else{
        console.log("数据连接成功")
    }
});
module.exports=mo;
