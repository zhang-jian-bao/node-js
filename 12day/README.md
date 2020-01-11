# 使用mongoose模块连接mongodb数据库

## 前提：使用mongoose模块连接数据库时，必须要保证数据库服务器是开启的

## 下载或安装mongoose模块

    cnpm install mongoose --save 

## 引入mongoose模块

    var mongoose = require("mongoose")

## 连接数据库服务器

    mongoose.connect(连接数据库的地址,回调函数)

    mongoose.connect("mongodb://localhost/数据库名称",function(error){
        if(error){
            console.log("数据库连接失败")
        }else{
            console.log("数据库连接成功")
        }
    })
    
## 导出mongoose模块

    module.exports = mongoose;    

## 定义schema

    //先引入连接数据库服务器的文件
    var mongoose = require("连接数据库服务器的文件");
    
    //定义Schema
    var userSchema = mongoose.Schema({
        //字段以及类型
        id : Number,
        name : String,
        age : Number,
        sex : String
    });
    
    //导出Schema
    module.exports = userSchema
    

## 根据schema创建模型

    //引入连接数据库的文件
    var mongoose = require("连接数据库的文件")
    
    //引入Schema文件
    var UserSchema = require("Schema文件")
    
    //创建模型
    var UserModel = mongoose.model("模型名称",userSchema,"集合名称")
    
    


## 通过模型可以对数据库进行操作 （增 删  改   查）

    UserModel.find()
    UserModel.Update()
    
    
