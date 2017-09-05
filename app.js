var express = require('express');
var path = require('path');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));


app.get('/ping', function(req, res) {

	res.status(200)
		.send({
			'success': true,
			'data' : "SampleProject_backend ping"
		});

});

app.use('/', function(req, res){

	res.render('index');

});



module.exports = app;
