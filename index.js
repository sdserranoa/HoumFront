var createError = require('http-errors');
var express = require('express');
var path = require('path');

var app = express();

const publicPath = path.join(__dirname, 'front/build');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, ()=>{
    console.log('Server is up')
});

module.exports = app;