//引入mo.js模块
var mo=require("./mo.js");
//定义schema
var sc=mo.Schema({
    name:String,
    checked:Boolean
});
//导出
module.exports=sc;