//引入http-errors模块
var createError = require('http-errors');
//引入express
var express = require('express');
//引入path模块
var path = require('path');
//引入cookie-parse
var cookieParser = require('cookie-parser');
//引入morman
var logger = require('morgan');

//引入二级路由
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//实例化express
var app = express();

// view engine setup  //指定模版引擎的位置
app.set('views', path.join(__dirname, 'views'));
//指定视图的模版引擎为 ejs
app.set('view engine', 'ejs');

app.use(logger('dev'));

//如何后台要接收前台以post方式发送过来的数据，那么就必须设置下面的内容
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(cookieParser());

//设置静态资源服务器
app.use(express.static(path.join(__dirname, 'public')));

//通过一级路由去加载二级路由
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
//如果请求发生错误会跳转到404
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
