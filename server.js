var express = require('express');
var fs = require('fs');
var helmet = require('helmet');
var bodyParser = require('body-parser');

var app = express();

// security settings
// helmet sets http headers to prevent known web vulnerabilities
app.use(helmet());


app.use(bodyParser.urlencoded({
	extended: false
}));

// settings for html content
app.engine('.html', require('ejs').__express);
app.use('/static', express.static('./static'));
app.set('views',__dirname + '/views');
app.set('view engine', 'html');

require('./routes')(app);

app.listen(8080);
