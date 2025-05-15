const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { messageSchema } = require("./models/schema.js");
const app = express();
require("dotenv").config();
//require('mongoose');

app.use(morgan("dev"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Hello-world-Docker-Sample-Api");
});

app.post("/message", async (req, res) => {
  console.log(req.body)
  res.send(req.body.message)
});



const fun = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(process.env.PORT, () => {
      console.log(`Server is started at ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};
fun();



