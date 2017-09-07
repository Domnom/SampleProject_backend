var db = require('../db.schema');
var Sequelize = db.Sequelize;
var sequelize = db.sequelize;

var Game = sequelize.define('game', {
	name: {
		type: Sequelize.STRING
	}
});

var gameSchema = {

	get : function(where) {

		return new Promise(function(thenCb, catchCb) {
			if (!where) { where = {}; }

			Game.findAll({
				where : where
			})
			.then(function(seqGameArray) {
				thenCb(seqGameArray);
			})
			.catch(function(error) {
				catchCb(error);
			});

		});

	},

	create : function(data) {

		return new Promise(function(thenCb, catchCb) {
			Game.create({
					name : data.name
				})
				.then(function(seqGame) {
					thenCb(seqGame);
				});	
		})	
	},
	update : function(id, data) {

		return new Promise(function(thenCb, catchCb) {

			// -- Fetch the board
			Game.findById(id)
				.then(function(seqGame) {

					var dataToUpdate = {}

					// -- Validate here?
					if (data.name != undefined)
					{
						dataToUpdate.name = data.name;
					}

					seqGame.update(dataToUpdate)
							.then(function(seqGame) {
								thenCb(seqGame);
							});
				})
				.catch(function(error) {

				});

		});
	},

	delete : function(id) {

		return new Promise(function(thenCb, catchCb) {

			Game.findById(id)
				.then(function(seqGame) {

					seqGame.destroy()
							.then(function(seqGame) {
								thenCb(seqGame);
							})
							.catch(function(error) {
								catchCb(error);
							})

				})
				.catch(function(error) {
					catchCb(error);
				});

		});

	}

}

module.exports = gameSchema;