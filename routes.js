var accounts = require('./controllers/accounts');
var content = require('./controllers/content');
var friends = require('./controllers/friends');

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
    
    app.get('/findFriends', function (req, res) {
        if (!req.session.user) {
        res.redirect('/');
        return;
    }
        res.render("friends.html", { currentFirst: "", currentLast: "", results: [], message: "" });
    });
    
    app.post('/findFriends', friends.search);
    
    app.get('/profiles', friends.viewProfile);

    app.get('/*', function (req, res) {
        res.render('error.html');
    });

};