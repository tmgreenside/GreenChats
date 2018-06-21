var accounts = require('./controllers/accounts');

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('index.html', {message: ""});
    });

    app.post('/', accounts.signin);
    
    app.get('/signup', function(req, res) {
        res.render('signup.html', {message: ""});
    });
    
    app.post('/signup', accounts.signup);

    app.get('/*', function (req, res) {
        res.render('error.html');
    });

};