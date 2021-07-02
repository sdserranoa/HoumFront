var createError = require('http-errors');
var express = require('express');
var path = require('path');


var app = express();

app.use('/', express.static(path.join(__dirname, 'front/build')));

app.use(function (req, res, next) {
    next(createError(404));
});

app.listen(80);

module.exports = app;