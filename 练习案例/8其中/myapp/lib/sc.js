//引入mo.js文件
var mo=require("./mo.js");
//定义schema
var sc=mo.Schema({
    name:String,
    sex:String,
    age:Number,
    tel:Number,
    date:String
});
//导出
module.exports=sc;