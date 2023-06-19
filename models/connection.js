const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://bulleouvrard:83ZvEdihFcWyKHZH@cluster0.ebmpybm.mongodb.net/hackatweet";

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));
