var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString);

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});
var Ostrich = require("./models/ostrich");

async function recreateDB(){
  // Delete everything
  await Ostrich.deleteMany();
  let instance1 = new
  Ostrich({name:"Gary", age:5,
  feather_count:3490});
  instance1.save().then(doc=>{
  console.log("First object saved")}
  ).catch(err=>{
  console.error(err)
  });

  let instance2 = new
  Ostrich({name:"Steve", age:2,
  feather_count:5489});
  instance2.save().then(doc=>{
  console.log("Second object saved")}
  ).catch(err=>{
  console.error(err)
  });

  let instance3 = new
  Ostrich({name:"Lisa", age:4,
  feather_count:2223});
  instance3.save().then(doc=>{
  console.log("Third object saved")}
  ).catch(err=>{
  console.error(err)
  });
}
let reseed = true;
if (reseed) {recreateDB();}
  

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ostrichRouter = require('./routes/ostrich');
var gridRouter = require('./routes/grid');
var randomRouter = require('./routes/pick');
var resourceRouter = require('./routes/resource');

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
app.use('/ostriches', ostrichRouter);
app.use('/grid', gridRouter);
app.use('/pick', randomRouter);
app.use('/resource', resourceRouter);

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
