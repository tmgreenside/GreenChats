var express = require('express');
var fs = require('fs');
var helmet = require('helmet');

var app = express();

// security settings
// helmet sets http headers to prevent known web vulnerabilities
app.use(helmet());

// settings for html content
app.engine('.html', require('ejs').__express);
app.use('/static', express.static('./static'));
app.set('views',__dirname + '/views');
app.set('view engine', 'html');

require('./routes')(app);

app.listen(8080);
