var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should(),
	expect = chai.expect;
 	chai.use(chaiHttp);

var HelpfulService = require('../services/Helpful.service');

describe("Good - Helpful service", function() {

 	var helpfulService;

 	before(function() {
 		helpfulService = new HelpfulService();
 	});

 	it ('add -> Add some numbers', function() {

 		var intTotal = helpfulService.add(1, 20);

 		expect(intTotal).to.equal(21);
 	});

 	it ('subtract -> Subtract some numbers', function() {

 		var intTotal = helpfulService.subtract(5, 3);

 		expect(intTotal).to.equal(2);
 	
 	});

 	it ('Should get the envs set in this server', function() {

 		var envObj = helpfulService.getEnv();

 		expect(envObj).to.have.property('DB_DIALECT').to.equal('mysql');
 		expect(envObj).to.have.property('DB_HOST').to.equal('sample-mysql');
 		expect(envObj).to.have.property('DB_PORT').to.equal('3306');
 		expect(envObj).to.have.property('DB_NAME').to.equal('backend_api_db');
 		expect(envObj).to.have.property('DB_USERNAME').to.equal('root');
 		expect(envObj).to.have.property('DB_PASSWORD').to.equal('mypassword');
 	});

 	it ('Should create a new game in the DB', function(done) {

 		chai.request('localhost')
 			.post('/game')
 			.send({
 				'name' : 'Cluedo'
 			})
 			.end(function(err, res) {

 				expect(res).to.have.status(200);
 				expect(res.body).to.include.all.keys('success', 'data');
 				expect(res.body.success).to.equal(true);
 				expect(res.body.data).to.have.property('id').to.equal(1);
 				expect(res.body.data).to.have.property('name').to.equal('Cluedo');

 				done();
 			});

 	});

 	it ('Should update the Cleudo game in the DB', function(done) {

 		chai.request('localhost')
 			.put('/game/1')
 			.send({
 				'name' : 'Cluedo 2017'
 			})
 			.end(function(err, res) {

 				expect(res).to.have.status(200);
 				expect(res.body).to.include.all.keys('success', 'data');
 				expect(res.body.success).to.equal(true);
 				expect(res.body.data).to.have.property('id').to.equal(1);
 				expect(res.body.data).to.have.property('name').to.equal('Cluedo 2017');

 				done();
 			});
 	});

 	it ('Should retrieve the updated Cleudo game in the DB', function(done) {

 		chai.request('localhost')
 			.get('/game/1')
 			.end(function(err, res) {

 				expect(res).to.have.status(200);
 				expect(res.body).to.include.all.keys('success', 'data');
 				expect(res.body.success).to.equal(true);
 				expect(res.body.data).to.be.an('array');
 				expect(res.body.data[0]).to.have.property('id').to.equal(1);
 				expect(res.body.data[0]).to.have.property('name').to.equal('Cluedo 2017');

 				done();
 			});

 	});

 })