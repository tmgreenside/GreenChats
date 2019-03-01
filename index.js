var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

var registration = require('./Registration/registration.js');

app.set('view engine', 'ejs');
app.set('views', './views')

app.use(cookieParser());
app.use('/register', registration);

app.get('/', function(req, res) {
    res.render("index");
});

app.listen(8000);
