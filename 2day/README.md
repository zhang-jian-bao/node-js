## 如何解决中文乱码问题

    response.writeHead(200,{"Content-Type" : "text/html; charset=utf-8"})

## 如何解决跨域问题

    response.setHeader("Access-Control-Allow-Origin","*");

## 注意点

    一定要把跨域写在中文乱码上面

## 如何接受前台以get方式发送过来的数据
    
    request.url
    
## 如何解析前台以get方式发送过来的数据，说白了，就是如何将字符串解析为对象

    var url = require("url");
    
    url.parse(request.url,true).query

## 如何接收前台以post方式发送过来的数据
    
    var str = ""
    
    request.on("data",function(data){
        str = str + data
    });
    
    request.on("end",function(){
        console.log(str)
    })
    
## 如何将post方式发送过来的数据解析为对象

    var querystring = require("querystring");
    
    querystring.parse()