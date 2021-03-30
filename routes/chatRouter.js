const express = require("express");
const chatRouter = express.Router();
const chatController = require("./../controllers/chatController.js");

chatRouter.get("/:id", chatController.get);
chatRouter.get("/getAll", chatController.getAll);
chatRouter.post("/", chatController.create());

module.exports = chatRouter;