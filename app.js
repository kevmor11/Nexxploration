const express = require('express'),
      path = require('path'),
      favicon = require('serve-favicon'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      compression = require('compression'),
      http = require('http'),

      // Routes
      index = require('./routes/index'),

      app = express()

// view engine setup
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'ejs')

.use(compression())
.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
.use(logger('dev'))
.use(bodyParser.json())
.use(bodyParser.urlencoded({ extended: false }))
.use(cookieParser())
.use(express.static(path.join(__dirname, 'public')))

.use('/', index)

// catch 404 and forward to error handler
.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
})

// error handler
.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
