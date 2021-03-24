const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./routes/userRouter.js");

//for cors requests
app.use(cors());
app.options("*", cors());

//to get data from post requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/user", userRouter);


mongoose.connect("mongodb://localhost:27017/hitcherdb", {useUnfieldTopology: true}, function(err) {
	if(err) return console.log(err);
	app.listen(3001);
});

module.exports = app;