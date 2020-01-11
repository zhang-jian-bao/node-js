var express = require("express");

var router = express.Router();

var fs = require("fs");

router.get("/",function (req,res,next) {
    var data = fs.readFileSync("./data/news.json","utf8");
    res.render("index",{
        menu : JSON.parse(data).menu
    })
})

router.get("/api",function (req,res,next) {
    var data = fs.readFileSync("./data/news.json","utf8");
    res.send(JSON.parse(data).slider);
});

router.get("/list",function (req,res,next) {
    var data = fs.readFileSync("./data/news.json","utf8");
    res.send(JSON.parse(data).menu);
})

module.exports = router