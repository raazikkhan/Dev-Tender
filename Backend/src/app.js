const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("hello node world");
});

app.use("/test", (req, res) => {
  res.send("Test check route");
});
app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(7777, () => {
  console.log("Server is running on port 7777");
});
