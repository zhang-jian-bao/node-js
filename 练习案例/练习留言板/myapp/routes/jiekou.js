//引入express模块
var ex=require("express");
//获取路由
var router=ex.Router();
//引入studentModel.js文件
var mm=require("../lib/studentModel");
//设置接口路由
//1.添加
router.get("/add",function (req, res, next) {
    //获取前台数据
    var da=req.query;
    //实例化
    var ma=new mm(da);
    //添加
    ma.save(function (err) {
        if(err){
            res.send({
                code:1,
                message:"添加数据失败"
            });
        }else{
            res.send({
                code:0,
                message:"添加数据成功"
            });
        }
    })
});
//2.读取数据库数据，返回前台，渲染页面
router.get("/read",function (req, res, next) {
    mm.find({},function (err, data) {
        if(err){
            res.send({
                code:2,
                message:"数据读取失败"
            });
        }else{
            res.send({
                code:0,
                data:data,
                message:"数据读取成功"
            });
        }
    })
});
//3.全部删除数据
router.get("/delAll",function (req, res, next) {
    mm.remove({},function (err) {
        if(err){
            res.send({
                code:3,
                message:"全部删除数据失败"
            });
        }else{
            res.send({
                code:0,
                message:"全部删除数据成功"
            });
        }
    })
});
//4.单行删除数据
router.get("/del",function (req, res, next) {
    //获取前台请求数据
    var da=req.query;
    //单删
    mm.remove(da,function (err) {
        if(err){
            res.send({
                code:4,
                message:"单行删除数据失败"
            });
        }else{
            res.send({
                code:0,
                message:"单行删除数据成功"
            });
        }
    })
});
//5. 查找数据u
router.get("/search",function (req, res, next) {
    //获取前台请求数据
    var da=req.query;
    //查找
    mm.find(da,function (err) {
        if(err){
            res.send({
                code:5,
                message:"查找数据失败"
            });
        }else{
            res.send({
                code:0,
                message:"查找数据成功"
            });
        }
    })
});
//6. 模糊数据查找
router.get("/mh",function (req, res, next) {
    //获取前台请求数据
    var da=req.query;
    mm.find({"name":new RegExp(da.name,"ig")},function (err,data) {
        if(err){
            res.send({
                code:6,
                message:"模糊数据查找失败"
            });
        }else{
            res.send({
                code:0,
                data:data,
                message:"模糊数据查找成功"
            });
        }
    })
});


//导出
module.exports=router;