const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const { DB } = require("./config/keys");
// connect to the database;
mongoose
  .connect(DB)
  .then(() => {
    //eslint-disable-next-line no-console
    console.log("Connection to database was successful");
  })
  .catch(error => {
    //eslint-disable-next-line no-console
    console.log("Could not connect to database", { error });
  });
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, () => {
  //eslint-disable-next-line no-console
  console.log("Server is up and running");
});
