//引入fs模块
var fs=require("fs");
//引入querystring模块
var qu=require("querystring");
function aa(req,res) {
    //获取前台请求数据
    str = "";
    req.on("data", function (da) {
        str += da;
    });
    req.on("end", function () {
        var sj = qu.parse(str);
        fs.writeFile("./json/zjb.json", JSON.stringify(sj), "utf-8", function (err, dad) {
            if (err) {
                //console.log(err+"写入错误");
            } else {
                res.write("写入成功");
                res.end();
            }
        })
    })
}
    module.exports=aa;