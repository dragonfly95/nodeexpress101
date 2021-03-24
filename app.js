var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sequelize = require('./models').sequelize;
// sequelize.sync();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

/*
var mysql2 = require('mysql2/promise');

var pool = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "1q2w3e4r5t",
  database: "gosmsdb",
  insecureAuth : true
});

const dbTest = async () => {
  const connection = await pool.getConnection(async conn => conn);
  const [rows] = await connection.query("select * from i_deny_numbers limit 0, 10");
  connection.release();
  return rows;
};

dbTest().then((rows) => {
  rows.forEach(row => {
    console.log(row);
  })
});


let mysql = require('mysql');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1q2w3e4r5t",
  database: "gosmsdb"
});
connection.connect();

connection.query('select * from i_deny_numbers limit 0, 10', (error, results, fields) => {
  if (error) {
    console.log(error);
  }
  console.log(results);
});

connection.end();
*/
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
