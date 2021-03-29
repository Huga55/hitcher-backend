const express = require("express");
const chatRouter = express.Router();
const chatController = require("./../controllers/chatController");

chatRouter.get("/:id", chatController.getAll);

module.exports = chatRouter;