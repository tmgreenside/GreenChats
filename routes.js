var accounts = require('./controllers/accounts');
var content = require('./controllers/content');

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('index.html', {message: ""});
    });

    app.post('/', accounts.signin);
    
    app.get('/signup', function(req, res) {
        res.render('signup.html', {message: ""});
    });
    
    app.post('/signup', accounts.signup);
    
    app.get('/home', content.show);
    
    app.post('/home', content.postSubmit);
    
    app.get('/logout', accounts.signout);
    
    app.get('/profile', content.showProfile);
    app.post('/profile', content.postSubmit);
    
    app.get('/editProfile', content.editProfile);

    app.get('/*', function (req, res) {
        res.render('error.html');
    });

};