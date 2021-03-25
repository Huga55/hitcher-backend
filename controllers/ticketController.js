const Ticket = require("../models/ticket.js");
const User = require("../models/user.js");

exports.getAll = function(request,response) {
	Ticket.find({}, function(error, result) {
		if(error) {
			console.log(error);
			return response.status(400).send({success: false, error});
		} 

		return response.send({success: true, data: result});
	})
}

exports.create = function(request, response) {
	if(!request.body) return response.status(400).send("Error. Data not found");
	//token to get id of author
	const token = request.headers.authorization;

	const { _id } = request.userData;

	//sconst {  } = request.body;
}