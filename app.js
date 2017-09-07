var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* Sequelize controller */
var GameController = require('./controllers/Game.ctrl');

var controllers = {

	gameCtrl : new GameController()

}


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));



app.get('/game', controllers.gameCtrl.index);
app.get('/game/:gameId', controllers.gameCtrl.show);
app.post('/game', controllers.gameCtrl.store);
app.put('/game/:gameId', controllers.gameCtrl.update);
app.delete('/game/:gameId', controllers.gameCtrl.delete);


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
