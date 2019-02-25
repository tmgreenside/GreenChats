var express = require('express');
var app = express();

var registration = require('./Registration/registration.js');

app.use(express.static(path.join(__dirname, 'Templates')));
app.use('/Register', registration);
app.set('view engine', 'html');

app.listen(8000);
