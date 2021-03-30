const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageScheme = new Schema({
    chatId: String,
    userIdFrom: String,
    userIdTo: String,
    dateCreate: String,
    message: String,
});

module.exports = mongoose.model("Message", messageScheme);