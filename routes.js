module.exports = function(app) {
	app.use('/static', express.static('./static'));
	app.set('views',__dirname + '/views');
	app.set('view engine', 'html');

	app.get('/', function(req, res) {
		res.render('home.html');
	});
}