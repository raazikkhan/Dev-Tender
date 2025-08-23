const express = require("express");
const connectDB = require("./config/database");
const app = express();

// Connect to the database
// Good practice to use async/await for better error handling and firstly connect to the database before starting the server.
connectDB()
  .then(() => {
    console.log("Database is connected Succesfully");
    app.listen(7777, () => {
      console.log("Server is running on port 7777");
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
  });
