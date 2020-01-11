var http = require("http");

var path = require("path");

var server = http.createServer(function (req,res) {
    console.log(req.url);

    console.log(path.parse(req.url).ext);

});


server.listen(3000,function () {
    console.log("http://localhost:3000")
})