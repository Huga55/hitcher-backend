const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ticketScheme = new Schema({
	authorId: String,
	addressFrom: String,
	addressTo: String,
	timeFrom: Date,
	timeTo: Date,
	description: String,
	type: String,
	dateCreateUpdate: Date,
});

module.exports = mongoose.model("Ticket", ticketScheme); 