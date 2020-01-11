//引入fs模块
var fs=require("fs");
//引入querystring模块
var qu=require("querystring");
function abc(req,res){
    var str='';
    req.on("data", function (da) {
        str+=da;
    });
    req.on("end", function () {
        //解析前台数据
        var q=qu.parse(str);

        fs.readFile("./json/zc.json","utf-8", function (err, daa) {
            if(err){
                console.log(err+"登录读取错误");
            }else{
                res.write(daa);
                res.end();
                //var dd=JSON.parse(daa);
                //if(q.name==dd.data[0].undefinedya&&q.pass==dd.data[0].ma){
                //    res.write("登录成功");
                //    res.end();
                //}else{
                //    res.write("登录失败");
                //    res.end();
                //}
            }

        })

    });
}
module.exports=abc;