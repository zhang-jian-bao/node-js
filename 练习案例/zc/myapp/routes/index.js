var express = require('express');
var router = express.Router();
var fs=require("fs");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '你是坏蛋' });
});
router.get("/zc", function (req, res, next) {
  var da=req.query;
  console.log(da);
  fs.writeFile("./json/zc.json",JSON.stringify(da),"utf-8", function (err) {
    if(err){
      res.send("错误")
    }else{
      res.send("成功")
    }
  })
});

module.exports = router;
