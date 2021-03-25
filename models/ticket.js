const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ticketScheme = new Schema({
	authorId: String,
	addressFrom: String,
	addressTo: String,
	timeFrom: Number,
	timeTo: Number,
	description: String,
	type: String,
});