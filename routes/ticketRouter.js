const express = require("require");
const ticketRouter = express.Router();
const ticketController = require("../controlles/ticketController.js");

ticketRouter.get("/getAll", ticketController.getAll);

module.exports = ticketRouter;