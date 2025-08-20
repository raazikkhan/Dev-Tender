const express = require("express");

const app = express();

// use for testing purposes
app.use("/test", (req, res) => {
  res.send("Test check route");
});

// all type of https handlers

app.get("/", (res, req) => {
  res.send("welcome to the home page");
});
app.get("/user", (req, res) => {
  res.send("User data fetched");
});

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("User data posted");
});

app.delete("/user", (req, res) => {
  res.send("User data deleted Successfully");
});

app.listen(7777, () => {
  console.log("Server is running on port 7777");
});
