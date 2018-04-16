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



app.use(bodyParser.json());



app.use('/', things);
app.use('/things', things);

app.listen(3001);
//module.exports = app;