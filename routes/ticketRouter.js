const express = require("express");
const ticketRouter = express.Router();
const ticketController = require("./../controllers/ticketController.js");

ticketRouter.get("/all", ticketController.getAll);
ticketRouter.post("/", ticketController.create);
ticketRouter.get("/:id", ticketController.getOne);
ticketRouter.put("/", ticketController.update);
ticketRouter.delete("/:id", ticketController.delete);

module.exports = ticketRouter;