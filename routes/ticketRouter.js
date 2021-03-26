const express = require("express");
const ticketRouter = express.Router();
const ticketController = require("./../controllers/ticketController.js");

ticketRouter.get("/getAll", ticketController.getAll);
ticketRouter.post("/create", ticketController.create);
ticketRouter.get("/getOne/:id", ticketController.getOne);
ticketRouter.put("/update", ticketController.update);

module.exports = ticketRouter;