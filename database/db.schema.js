var Sequelize = require('sequelize');
var sequelize = new Sequelize({ 
								dialect  : process.env.DB_DIALECT,
								host : process.env.DB_HOST,
								port : process.env.DB_PORT,
								database : process.env.DB_NAME,
								username : process.env.DB_USERNAME,
								password : process.env.DB_PASSWORD
							 });


module.exports = {
	Sequelize : Sequelize,
	sequelize : sequelize
}