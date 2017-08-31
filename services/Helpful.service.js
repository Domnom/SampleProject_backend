function HelpfulService()
{
	var me = this;

	this.add = function(intA, intB)
	{
		return parseInt(intA) + parseInt(intB);
	}

	this.subtract = function(intA, intB)
	{
		return parseInt(intA) - parseInt(intB);
	}

	this.getEnv = function()
	{
		return {
			'DB_DIALECT' : process.env.DB_DIALECT,
			'DB_HOST' : process.env.DB_HOST,
			'DB_PORT' : process.env.DB_PORT,
			'DB_NAME' : process.env.DB_NAME,
			'DB_USERNAME' : process.env.DB_USERNAME,
			'DB_PASSWORD' : process.env.DB_PASSWORD
		}
	}
}


module.exports = HelpfulService;