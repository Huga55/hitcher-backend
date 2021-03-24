const supertest = require("supertest");
const expect = require("chai").expect;
const app = require("./hitcher");
const assert = require('assert');
const api = supertest("http://localhost:3001")

const check = require("./controllers/userController").check;

//get error from check user
describe("GET /user/check", function(done) {
	it("should return success false, 400", function(done) {
		api.get("/user/check")
			.set("authorization", "123")
			.end(function(error, response) {
				expect(response.status).to.equal(400);
				expect(response.body).deep.equal({success: false});
				done();
			})
	})
})