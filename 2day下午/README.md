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
    
    
## fs模块

    1. 文件读取
        异步：
            fs.readFile("文件的地址","utf-8",function(data){
                console.log(data)
            })
        
            
            
        同步：
            try{
                 var data = fs.readFileSync("文件的地址","utf-8")  
            }catch(e){
                console.log(e)
            }
          
           
    2. 文件写入
    
        异步：
            fs.writeFile("文件的地址","写入的内容","utf-8",function(error){
                if(!error){
                    console.log("写入成功")
                }
            })       
           
        同步：
            fs.writeFile("文件的地址","写入的内容","utf-8") 
            
            
    3. 文件删除
    
        fs.unlink('./fileForUnlink.txt', function(err){
            if(err) throw err;
            console.log('文件删除成功');
        });
        
        
## 创建一个服务器，当访问服务器的时候，可以读取指定文件的内容

## 创建一个服务器，当访问服务器的时候，给指定的文件写入内容                    
        
## 创建一个服务器，当访问服务器的时候，删除指定的文件     

## 实现留言板功能

    1. 创建前台页面
    
    2. 实现后台       

        