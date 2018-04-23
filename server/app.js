var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var stylus = require('stylus');

var morgan = require('morgan');
var mongoose = require('mongoose'); 
// configuration ===============================================================
var database = require('./config/database'); 
mongoose.connect(database.localUrl); 

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var employeesRouter = require('./routes/employees');
//var departmentRouter = require('./routes/department');

var app = express();
app.use(morgan('dev')); // log every request to the console
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
var port = process.env.PORT;

// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://127.0.0.1:27017';
// const taskDB = 'companyResource';

 app.use('/', indexRouter);
// app.use('/api/users', usersRouter);
app.use('/api/employees', employeesRouter);
// app.use('/api/departments', departmentRouter);

require('./routes/department')(app);

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


app.listen(6060, ()=>{console.log('start')});
module.exports = app;
