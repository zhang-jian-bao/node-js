/**
 * Created by 0 on 2019-09-19.
 */
var http=require("http");
var s=http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json;charset=utf-8',//防乱码中文字
        'Access-Control-Allow-Origin': '*'//跨域请求
    });

    res.write("你妹啊!");
    res.end();
});
s.listen(8040);