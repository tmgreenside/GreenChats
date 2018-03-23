var express = require('express');
var fs = require('fs');

var app = express();

require('./routes')(app);

app.listen(8080);
