var express = require('express');
var router = express.Router();
var fs=require("fs");
/* GET home page. */
router.get('/', function(req, res, next) {
  var da1=fs.readFileSync("./json/color.json","utf-8");
  //var da2=fs.readFileSync("./json/color.json","utf-8");
  //var da3=fs.readFileSync("./json/color.json","utf-8");
  res.render('index', {
    list : JSON.parse(da1).list1,
    banner:JSON.parse(da1).banner,
    a:JSON.parse(da1).list2
    //banner:JSON.parse(da2)
    //list2:JSON.parse(da3).list2
  });
});

module.exports = router;
