var createError = require('http-errors');//引入http-errors模块
var express = require('express');//引入express模块
var path = require('path');//引入path模块
var cookieParser = require('cookie-parser');//引入cookie-parser模块
var logger = require('morgan');//引入morgan模块

var indexRouter = require('./routes/index');//引入二级路由文件
var loginRouter = require('./routes/login');//引入二级路由文件ejs可省略不写
var listRouter=require("./routes/list.js");//引入二级路由列表文件
var coreRouter=require("./routes/core.js");//引入个人中心文件
var cartRouter=require("./routes/cart.js");//引入购物车文件
var app = express();//实列化express
var ejs=require("ejs");//引入ejs模块
// view engine setup
app.set('views', path.join(__dirname, 'views'));//指定模板引擎位置
app.engine("html",ejs.__express);//把后缀名ejs改为html
app.set('view engine', 'html');//指定模板引擎为ejs


app.use(logger('dev'));
app.use(express.json());//前台一post方式请求必写的两个，body-parser
app.use(express.urlencoded({ extended: false }));//前台一post方式请求必写的两个，body-parser
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));//设置静态资源服务器

app.use('/', indexRouter);//一级路由设置二级路由
app.use('/api', loginRouter);//一级路由设置二级路由
app.use("/list",listRouter);//列表路由设置
app.use("/core",coreRouter);//个人中心路由设置
app.use("/cart",cartRouter);//购物车路由设置

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
