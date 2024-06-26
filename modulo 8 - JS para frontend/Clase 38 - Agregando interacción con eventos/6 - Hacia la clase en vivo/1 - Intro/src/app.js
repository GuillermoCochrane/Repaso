var express = require('express');
var path = require('path');
var createError = require('http-errors');
const methodOverride =  require('method-override'); // Required for use methods PUT and DELETE
var cookieParser = require('cookie-parser');
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//Settings
/* app.use(express.static(path.join(__dirname, 'public'))); */
app.use(express.static( 'public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(cookieParser()); // Required for cookies creation
app.use(session({secret: "You know nothing", resave: false, saveUninitialized: false})); // Session Require for login process


//routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

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
