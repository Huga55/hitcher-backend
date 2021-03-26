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
	if(!request.body) return response.status(400).send({success: false, error: "Error. Data not found"});
	//token to get id of author
	const token = request.headers.authorization;

	const { _id } = request.dataUser;

	const { addressFrom, addressTo, timeFrom, timeTo, description, type, dateCreate } = request.body;

	const ticket = new Ticket({...request.body, authorId: _id});
	ticket.save(function(error) {
		if(error) {
			return response.status(400).send({success: false, error});
		}
		return response.send({success: true});
	});
	//need to send on socket new for all!
	
}

exports.getOne = function(request, response) {
	if(!request.params.id) return response.status(400).send({success: false, error: "Error. Id not found"});

	const id = request.params.id;

	findOne({_id: id}, function(error, result) {
		if(error) return response.status(400).send({success: false, error});

		if(result) {
			return response.send({success: true, data: result});
		}
		return response.status(400).send({success: false, error: "Error. Ticket not found"});
	})
}

exports.update = function(request,response) {
	if(!request.body) return response.status(400).send({success: false, error: "Error. Data not found"});

	const { _id } = request.dataUser;
	const { id, ...otherData } = request.body;

	Ticket.findOneAndUpdate({authorId: _id, _id : request.body.id}, {...otherData}, {new: true}, 
		function(error, result) {
			if(error) return response.status(400).send({success: false, error});
			if(result) {
				return response.send({success: true, data: result});
			}
			return response.status(400).send({success: false, error: "Error. Ticket not found"});
	});
}