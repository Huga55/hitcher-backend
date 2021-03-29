const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageScheme = new Schema({
    chatId: String,
    userId: String,
    dateCreate: String,
    message: String,
});

module.exports = mongoose.model("Message", messageScheme);