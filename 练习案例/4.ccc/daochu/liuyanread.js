//引入fs模块
var fs=require("fs");
function ab(res){
    fs.readFile("./json/zjb.json","utf-8",function(err,da){
        if(err){
            console.log(err+"读取错误");
        }else{
            res.write(da+"读取成功");
            res.end();
        }
    })
}
module.exports=ab;