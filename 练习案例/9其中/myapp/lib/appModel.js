//引入mo.js文件
var mo=require("./mo.js");

//引入sc.js文件
var sc=require("./sc.js");

//定义模型
var appModel=mo.model("appModel",sc,"app");

//导出
module.exports=appModel;