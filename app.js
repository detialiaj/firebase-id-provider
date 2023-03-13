var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

var index = require('./routes/index');
var auth = require('./routes/auth');

var app = express();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', "*");
//     next()
// })
app.use(express.static(path.join(__dirname, 'webapp', 'build')));

app.use('/', index);
app.use('/auth', auth);

module.exports = app;
