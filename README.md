# mongodb数据库的命令

## 查看所有数据库列表

    show dbs
    
## 创建数据库的命令

    use 数据库的名称    

## 注意： 如果创建的数据库没有数据，那么show dbs 不会显示创建的数据库， 当数据库内有数据或者有集合的时候就会显示

## 创建集合
    
    db.createCollection("集合名称")
    
## 查看当前数据库的所有集合

    show collections
    
## 给集合里面添加数据

    db.集合名.insert({"id":1001,"name" : "张三","age" : 22, "sex" : "man" })
    
## 查找集合的数据
    
### 查看当前集合里面所有的数据

    db.集合名.find()    

### 查看当前集合里面等于多少的数据

    db.集合名.find({"age" : 22})  
    
### 查看当前集合里面大于多少的数据

    db.集合名.find({"age" : { $gt : 22 }});
    
### 查看当前集合里面小于多少的数据

    db.集合名.find({"age" : {$lt : 22}})    
    
### 查看当前集合里面大于等于多少的数据
    
    db.集合名.find({"age" : {$gte : 22}})
    
### 查看当前集合里面小于等于多少的数据

    db.集合宁.find({"age" : {$lte : 22}})   
    
### 查看当前集合里面大于多少并且小于多少的数据

    db.集合名.find({"age" : {$gt:22 , $lt:28}})
    
### 查看当前集合里面大于等于多少并且小于等于多少的数据 

    db.集合名.find({"age" : {$gte : 22, $lte : 28}})    
   
### 模糊查询

    db.集合名.find({"name" : /查询的关键字/}) 
    
### 查询以什么开头的数据

    db.集合名.find({"name" : /^查询关键字/})        
    
### 升序，降序

    db.集合名.find().sort({"age" : 1})
    db.集合名.find().sort({"age" : -1})
    
### 查询前多少条数据

    db.集合名.find().limit(5)  
    
### 查询多少条以后的数据

    db.集合名.find().skip(10)    
    
### 查询多少到多少之间的数据   

    db.集合名.find().limit(10).skip(5)    
       
    skip表示的是从多少条之后
    limit表示从多少条之后拿前几条
    
    db.class.find().limit(5).skip(3) 
    
    
    1,2,3,4,5,6,7,8     --- 1000
    
    db.class.find().limit(10).skip(0*10)  0 - 10
    
### 查询多少或多少的数据

    db.集合名.find({$or : [{"age" : 22, "age" : 44}]})    
    
### 查询多少与多少的数据

    db.集合名.find({"name" : "jack", age : 22})
    
### 查询第一条数据

    db.集合名.findOne()    
    
### 查看当前集合内一共有多少条数据

    db.集合名.find(里面还可以条件).count()   
    
### 修改数据

    db.集合名.update(条件)     

    db.集合名.update(查询的条件,修改的内容)
    db.集合名.update({"name" : "jack"},{$set : {"age" : 200}})
    
### 删除数据

#### 删除所有数据
    db.集合名.remove({})
    
#### 删除指定数据

    db.集合名.remove({"name" : "jack"})    
    
    db.user.remove({$and:[{age:{$gt:20}},{sex:{$ne:’女’}}]})
    
### 删除集合

    db.集合名.drop()   
    
### 删除数据库

    db.dropDatabase()   
    
