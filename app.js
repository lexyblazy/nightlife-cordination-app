const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const { DB } = require("./config/keys");
const authRoutes = require("./routes/authRoutes");
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

//load up routes
app.use(authRoutes);

app.listen(PORT, () => {
  //eslint-disable-next-line no-console
  console.log("Server is up and running");
});
