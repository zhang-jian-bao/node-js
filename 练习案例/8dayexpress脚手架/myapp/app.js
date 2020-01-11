//默认路由地址在bin文件中的www文件里默认是3000
//引入http-errors模块
var createError = require('http-errors');
//引入express模块
var express = require('express');
//引入path模块
var path = require('path');
//引入cookie-parser模块
var cookieParser = require('cookie-parser');
//引入morgan模块
var logger = require('morgan');
//引入二级路由文件routes/index.js
var indexRouter = require('./routes/index');
//引入二级路由文件routes/users.js
var usersRouter = require('./routes/users');
//实列化express
var app = express();

// view engine setup
//指定模板引擎位置
app.set('views', path.join(__dirname, 'views'));
//指定模板引擎为ejs
app.set('view engine', 'ejs');

app.use(logger('dev'));
//引入body-parser模板的三步
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
//设置静态资源服务器
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);//由一级路由设置二级路由
app.use('/users', usersRouter);//由一级路由设置二级路由

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));//这是路由不对，直接返回404页面处理
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
