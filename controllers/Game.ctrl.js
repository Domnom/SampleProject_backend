var gameSchema = require('../database/schemas/Game.schema');


function GameController()
{
	var me = this;
	this.sequelize;


	this.index = function(req, res, next)
	{
		gameSchema.get()
					.then(function(seqGameArray) {
						return res.status(200)
									.send({
										'success' : true,
										'data' : seqGameArray
									});
					})
					.catch(function(error) {
						return res.status(400)
									.send({
										'success' : false,
										'error' : error
									});
					})
	}

	this.show = function(req, res, next)
	{
		var gameId = req.params.gameId;

		var where = {
			id : gameId
		}

		gameSchema.get(where)
					.then(function(seqGameArray) {
						return res.status(200)
									.send({
										'success' : true,
										'data' : seqGameArray
									});
					})
					.catch(function(error) {
						return res.status(400)
									.send({
										'success' : false,
										'error' : error
									});
					});
	}




	this.store = function(req, res, next)
	{
		var data = {
			name : req.body.name
		}

		gameSchema.create(data)
					.then(function(seqGame) {					

						return res.status(200)
									.send({
										'success' : true,
										'data' : seqGame
									});

					})
					.catch(function(error) {
						return res.status(400)
									.send({
										'success' : false,
										'error' : error
									});
					});
	}

	this.update = function(req, res, next)
	{
		var gameId = req.params.gameId;
		var data = {
			name : req.body.name
		}

		gameSchema.update(gameId, data)
					.then(function(seqGame) {
						return res.status(200)
									.send({
										'success' : true,
										'data' : seqGame
									});
					})
					.catch(function(error) {
						return res.status(400)
									.send({
										'success' : false,
										'error' : error
									});
					});
	}



	this.delete = function(req, res, next)
	{
		var gameId = req.params.gameId;
		
		gameSchema.delete(gameId)
					.then(function(seqGame) {
						return res.status(200)
									.send({
										'success' : true,
										'data' : seqGame
									});
					})
					.catch(function(error) {
						return res.status(400)
									.send({
										'success' : false,
										'error' : error
									});
					});
	}



	this.construct = function()
	{

	}
	this.construct();
}



module.exports = GameController;