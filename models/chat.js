const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chatScheme = new Schema({
    ticketId: String,
    creatorId: String,
    answererId: String,
    dateCreate: Date,
    report: [{
        userId: String,
        message: String,
    }]
});

module.exports = mongoose.model("Chat", chatScheme);