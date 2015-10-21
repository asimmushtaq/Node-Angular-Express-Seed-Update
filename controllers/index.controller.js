var db = require('../config/database.js');
var indexController = {};

indexController.index = function(req, res, next){
	console.log(req.test_value);
	db.query('SELECT * FROM users', function(err, results){
		console.log(results);
		res.send(results);
	    //res.render('index',{title: results.toString()});
	}); };

//new added
indexController.partials = function (req, res,next) {
	var name = req.params.name;
	//var name="asim";
	console.log('in here '+name);
	res.render('partials/' + name, {name:name});
};

module.exports = indexController;