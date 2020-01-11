//引入express模块
var ex=require("express");
//获取路由
var router=ex.Router();
//引入qiModel.js文件
var mm=require("../lib/qiModel");
//设置接口路由

//1.注册添加数据库数据
router.get("/write",function (req, res, next) {
    //获取前台请求数据
    var da=req.query;
    //实例化
    var ma=new mm(da);
    ma.save(function (err) {
        if(err){
            res.send({
                code:1,
                message:"添加数据库数据失败"
            });
        }else{
            res.send({
                code:0,
                message:"添加数据库数据成功"
            });
        }
    })
});

//2.从数据库查找数据，返回前台
router.get("/read",function (req, res, next) {
    mm.find({},function (err, docs) {
        if(err){
            res.send({
                code:2,
                message:"查找数据失败"
            });
        }else{
            res.send({
                code:0,
                data:docs,
                message:"查找数据成功"
            });
        }
    })
});

//3. 单行删除数据
router.get("/del",function (req, res, next) {
    //获取前台请求数据
    var da=req.query;
    console.log(da);
    mm.remove(da,function (err) {
        if(err){
            res.send({
                code:3,
                message:"单行数据删除失败"
            });
        }else{
            res.send({
                code:0,
                message:"单行数据删除成功"
            });
        }
    })
});

//4. 编辑数据
router.get("/edit",function (req, res, next) {
    //获取编辑页面的数据
    var xx=req.query;
    console.log(xx);
    mm.update(xx.qq,xx.ww,function (err) {
        if(err){
            res.send({
                code:4,
                message:"编辑数据失败"
            });
        }else{
            res.send({
                code:0,
                message:"编辑数据成功"
            });
        }
    })
});

//5. 搜索
router.get("/search",function (req, res, next) {
    //获取前台数据
    var da=req.query;
    mm.find(da,function (err, docs) {
        if(err){
            res.send({
                code:5,
                message:"搜素数据失败"
            });
        }else{
            res.send({
                code:0,
                data:docs,
                message:"搜素数据成功"
            });
        }
    })
});

//6. 模糊搜素
router.get("/mh",function (req, res, next) {
    var da=req.query;
    mm.find({"name":new RegExp(da.name,"ig")},function (err,data) {
        if(err){
            res.send({
                code:6,
                message:"模糊搜素失败"
            });
        }else{
            res.send({
                code:0,
                data:data,
                message:"模糊搜素成功"
            });
        }
    })
})

//导出
module.exports=router;