var express = require('express');
var router = express.Router();
var fs = require("fs");


/* GET home page. */
router.get('/', function(req, res, next) {

  var data = fs.readFileSync("./data/banner.json","utf8");
  var list = fs.readFileSync("./data/list.json","utf8");

  res.render("index",{
    data : JSON.parse(data),
    list : JSON.parse(list)
  })

});

module.exports = router;

