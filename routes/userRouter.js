const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController.js");


userRouter.post("/auth", userController.auth);
userRouter.get("/check", userController.check);
userRouter.post("/register", userController.register);

module.exports = userRouter;