const User = require("../models/user.js");
const crypto = require("crypto");
const randomstring = require("randomstring");

exports.auth = function(request, response) {
	if(!request.body) return response.status(400).send("Error! Body not found");

	const { email, password } = request.body;
	const hashPassword = crypto.createHash("md5").update(password).digest("hex");

	User.findOne({email, password: hashPassword}, function(err, result) {
		if(err) return response.status(400).send({success: false, error: "Email and/or password are incorrect"});

		const { _id } = result;
		const token = randomstring.generate(14);
		const hashToken = crypto.createHash("md5").update(token).digest("hex");
		User.findOneAndUpdate({_id}, {token: hashToken}, {new: true}, function(err, result) {
			if(err) return response.status(400).send({success: false, error: "Error with create token"});

			return response.send({
				success: true,
				data: {token},
			});
		})
	});
}

exports.register = function(request, response) {
	if(!request.body) return response.status(400).send("Error! Body not found");

	const { login, email, password } = request.body;
	const hashPassword = crypto.createHash("md5").update(password).digest("hex");
	//check user with this login
	User.findOne({login}, function(err, result) {
		if(result) {
		 	return response.status(400).send({success: false, error: "User with this login exists already"});
		}
		//check user with this email
		User.findOne({email}, function(err, result) {
			if(result) {
				return response.status(400).send({success: false, error: "User with this email exists already"});
			}
			//save new user
			const user = new User({login, email, password: hashPassword});
			user.save(function(error) {
				if(error) {
					console.log(error);
					return response.status(400).send({success: false, error});
				} 
				return response.send({success: true});
			});
		});
	});
}

exports.check = function(request, response) {
	if(!request.headers["authorization"]) return response.send({success: false});

	const token = request.headers["authorization"];
	const hashToken = crypto.createHash("md5").update(token).digest("hex");

	User.findOne({token: hashToken}, function(err, result) {
		if(err || !result) {
			return response.status(400).send({success: false});
		}
		return response.send({success: true});
	});
}