var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mysql = require('mysql');
var mySQLStore = require('express-mysql-session')(session);
var bodyParser = require('body-parser');

var app = express();

var credential = require('./Database/credentials.js');

var registration = require('./Registration/registration.js');
var account = require('./Accounts/accounts.js');
var main = require('./Profile/profile.js');

var sessionStore = new mySQLStore(credential.db);

app.use(bodyParser.urlencoded({extended: false}));
app.engine('ejs', require('express-ejs-extend'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('static'));
app.use(cookieParser());
app.use(session({
    key: "greenchats_cookie",
    secret: "lucky_cat",
    store: sessionStore,
    resave: false,
    saveUninitialized: false
 }));

app.use(cookieParser());
app.use('/register', registration);
app.use('/account', account);
app.use('/', main);

app.listen(8000);
