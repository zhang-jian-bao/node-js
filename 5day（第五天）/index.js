var http = require("http");
var url = require("url");


var banner = require("./module/banner");
var list = require("./module/list");



var server = http.createServer(function (request,response) {
    response.writeHead(200,{"Content-Type" : "text/html;charset=utf8"});

    var path = url.parse(request.url,true).pathname;

    if(path == "/api/banner"){
        banner(response)
    }else if(path == "/api/list"){
        list(response)
    }
});

server.listen(3000,function () {
    console.log("http://localhost:3000")
})