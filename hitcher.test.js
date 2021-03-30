const supertest = require("supertest");
const expect = require("chai").expect;
const app = require("./hitcher");
const assert = require('assert');
const api = supertest("http://localhost:3001")

const check = require("./controllers/userController").check;

//get error from check user
describe("GET /user/check", function(done) {
	it("CHECK should return success false, 400", function(done) {
		api.get("/user/check")
			.set("authorization", "adsfsdfsd")
			.end(function(error, response) {
				expect(response.status).to.equal(400);
				expect(response.body).deep.equal({success: false});
				done();
			})
	})
})

//get succes from check user
describe("GET /user/check", function(done) {
	it("CHECK should return success true, 200", function(done) {
		api.get("/user/check")
			.set("authorization", "asd")
			.end(function(error, response) {
				expect(response.status).to.equal(200);
				expect(response.body).deep.equal({success: true});
				done();
			})
	})
})

const registerData = {
	login: "test",
	email: "test@mail.ru",
	password: "asd",
}

//register
// describe("POST /user/register", function(done) {
// 	it("REGISTER should return false, 400", function(done) {
// 		api.post("/user/register")
// 			.set("Content-Type", "application/json")
// 			.send(registerData)
// 			.end(function(error, response) {
// 				console.log(response.body);
// 				expect(response.status).to.equal(400);
// 				expect(response.body.success).deep.equal(false);
// 				done();
// 			})
// 	})
// })

const authData = {
	email: "test1@mail.ru",
	password: "asd"
}
//auth user
describe("POST /user/auth", function(done) {
	it("AUTH should return false 400", function(done) {
		api.post("/user/auth")
			.set("Content-Type", "application/json")
			.send(authData)
			.end(function(error, response) {
				// console.log(response.body);
				expect(response.status).to.equal(200);
				expect(response.body.success).deep.equal(true);
				done();
			})
	})
})

//get all tickets
describe("GET /ticket/all", function(done) {
	it("ALL TICKETS", function(done) {
		api.get("/ticket/all")
			.set("Content-Type", "application/json")
			.set("authorization", "asd")
			.end(function(error, response) {
				// console.log("response", response.body);
				// console.log("error", error);
				expect(response.status).to.equal(200);
				expect(response.body.success).deep.equal(true);
				done();
			})
	})
})

const ticket = {
	addressFrom: "addressFrom",
	addressTo: "addressTo",
	timeFrom: 12,
	timeTo: 24,
	description: "description",
	type: "Водитель",
	dateCreateUpdate: "1242353424",
}

//create new ticket
describe("POST /ticket/", function(done) {
	it("CREATE NEW TICKET success:true", function(done) {
		api.post("/ticket/")
			.set("Content-Type", "application/json")
			.set("authorization", "asd")
			.send(ticket)
			.end(function(error, response) {
				// console.log("response", response.body);
				// console.log("error", error);
				expect(response.status).to.equal(200);
				expect(response.body).deep.equal({success: true});
				done();
			})
	})
})

//to get one ticket
const id = "605d7277a90825172c898b6c";
describe(`GET /ticket/${id}`, function(done) {
	it("GET ONE TICKET", function(done) {
		api.get(`/ticket/${id}`)
			.set("Content-Type", "application/json")
			.set("authorization", "asd")
			.end(function(error, response) {
				//console.log("response", response.body);
				//console.log("error", error);
				expect(response.status).to.equal(200);
				expect(response.body.success).to.equal(true);
				done();
			})
	})
})


//update ticket
const ticketUpdate = {
	addressForm: "New Address From",
	addressTo: "New Address To",
	timeFrom: 8,
	timeTo: 10,
	description: "new description",
	type: "пассажир",
	id: "605d7277a90825172c898b6c",
	dateCreateUpdate: 1238612738,
}
describe("PUT /ticket/", function(done) {
	it("PUT ticket", function(done) {
		api.put("/ticket/")
			.set("Content-Type", "application/json")
			.set("authorization", "asd")
			.send({...ticketUpdate})
			.end(function(error, response) {
				// console.log("response", response);
				// console.log("error", error);
				expect(response.status).to.equal(200);
				expect(response.body.success).to.equal(true);
				done();
			})
	})
})

//delete ticket
const idDelete = "605d72acc593f02d4813b002";
describe("Delete /ticket/:id", function(done) {
	it("DELETE ticket", function(done) {
		api.delete(`/ticket/${idDelete}`)
			.set("Content-Type", "application/json")
			.set("authorization", "asd")
			.end(function(error, response) {
				// console.log("response", response);
				// console.log("error", error);
				expect(response.status).to.equal(200);
				expect(response.body.success).to.equal(true);
				done();
			})
	})
})

//get all chats
describe("GET all /chat/getAll", function(done) {
	it("GET ALL chats", function(done) {
		api.get("/chat/getAll")
			.set("Content-Type", "application/json")
			.set("authorization", "asd")
			.end(function(error, response) {
				console.log("response", response.body);
				console.log("error", error);
				expect(response.status).to.equal(200);
				expect(response.body.status).to.equal(true);
				done();
			})
	})
})