const express = require("express");
const chatRouter = express.Router();
const chatController = require("./../controllers/chatController.js");

chatRouter.get("/getAll", chatController.getAll);
chatRouter.get("/:id", chatController.get);
chatRouter.post("/", chatController.create);
chatRouter.post("/send", chatController.send);

module.exports = chatRouter;