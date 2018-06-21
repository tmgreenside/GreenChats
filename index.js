var express = require('express');
var fs = require('fs');
var helmet = require('helmet');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

// security settings
// helmet sets http headers to prevent known web vulnerabilities
app.use(helmet()); // how to use this?

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(session({
    secret: 'this-is-a-secret-token',
    cookie: {maxAge: 60000},
    saveUninitialized: true,
    resave: true
}));

// settings for html content
app.engine('.html', require('ejs').__express);
app.use('/static', express.static('./static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

require('./routes')(app);

app.listen(8080);
