var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var app = express();

var registration = require('./Registration/registration.js');
var account = require('./Accounts/accounts.js');
var profile = require('./Profile/profile.js');

app.use(bodyParser.urlencoded({extended: false}));
app.engine('ejs', require('express-ejs-extend'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('static'));
app.use(cookieParser());
app.use(session({
    secret: "lucky cat",
    resave: false,
    saveUninitialized: false
 }));

app.use(cookieParser());
app.use('/register', registration);
app.use('/account', account);

app.get('/', function(req, res) {
    res.render("index", {"page_name":"Home"});
});

app.post('/', profile.login);

app.listen(8000);
