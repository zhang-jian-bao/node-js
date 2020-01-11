//引入mo.js
var mo=require("./mo.js");
//定义schema
var sc=mo.Schema({
    name:String,
    age:Number,
    class:String,
    date:String
});
//导出
module.exports=sc;