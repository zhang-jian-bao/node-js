var express = require("express");

var fs=require("fs");

var ejs = require("ejs");

var app = new express();

app.engine("html",ejs.__express);

//指定视图的模版引擎为ejs
app.set("view engine","html");

//指定模版的位置
app.set("views",__dirname + "/views");


app.get("/",function (req,res,next) {

    fs.readFile("./data/data.json","utf8",function (error,data) {
        if(error){
            console.log(error)
        }else{
            res.render("index.ejs.html",{
                title : "hello",
                data : JSON.parse(data),
                flag : false
            })
        }
    })


});

app.get("/list",function (req,res,next) {
    res.render("list");
})

app.get("/news",function (req,res,next) {
    res.render("news")
})



app.listen(3000,function () {
    console.log("http://localhost:3000");
})

