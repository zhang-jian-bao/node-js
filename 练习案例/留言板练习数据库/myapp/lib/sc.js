//引入mo.js文件
var mo=require("./mo.js");
//定义schema
var sc=mo.Schema({
    id:String,
    name:String,
    age:Number,
    tel:Number

});
//导出
module.exports=sc;