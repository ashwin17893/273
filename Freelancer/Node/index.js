var express = require('express');
var path = require('path');

//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');


var things = require('./things');
//var operations = require('./routes/operations');

var app = express();

app.use(cors());

//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
//app.use(logger('dev'));

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));
//app.use(cookieParser());

//app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', index);
app.use('/', things);
app.use('/things', things);

app.listen(3001);
//module.exports = app;