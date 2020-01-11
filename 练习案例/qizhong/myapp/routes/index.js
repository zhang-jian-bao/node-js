var express = require('express');
var router = express.Router();
var fs=require("fs");
/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile("./json/data.json","utf-8", function (err, data) {
    if(err){
      res.send("错误")
    }else{
      res.render('index',{
        dd:JSON.parse(data).list
      });

    }
  });

});

module.exports = router;
