//引入mo.js文件
var mo=require("./mo.js");
//定义schema
var sc=mo.Schema({
    id:Number,
    name:String,
    age:Number,
    sex:String,
    class:String
});
//导出
module.exports=sc;