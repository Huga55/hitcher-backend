const User = require("../models/user.js");
const crypto = require("crypto");

const authMiddleware = function(request, response) {
	const token = request.headers["authorization"];
	if(!token) return response.status(403).send({success: false, error: "Token not found"});

	const hashToken = crypto.createHash("md5").update(token).digest("hex");
	User.findOne({token, hashToken}, function(error, result) {
		//to get user data for all requests
		if(result && !error) {
			request.dataUser = result;
			next();
		}else {
			return response.status(403).send({success: false, error: "Token is not correct"});
		}
	})
}

module.exports = authMiddleware;