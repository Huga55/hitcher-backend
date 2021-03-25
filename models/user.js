const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userScheme = new Schema({
	login: String,
	email: String,
	password: String,
	token: String,
	sendNotifications: {type: Boolean, default: false},
});

module.exports = mongoose.model("User", userScheme);