var express = require('express');
var app = express();

var registration = require('./Registration/registration.js');

app.set('view engine', 'ejs');
app.set('views', './views')


app.use('/Register', registration);

app.get('/', function(req, res) {
    res.render("index");
});

app.listen(8000);
