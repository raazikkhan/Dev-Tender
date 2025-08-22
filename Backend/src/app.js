const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middleware/Auth");

app.get("/admin", adminAuth, (req, res) => {
  res.send("admin authenticated successfully");
});

app.get("/user", userAuth, (req, res) => {
  res.send("user authenticated successfully");
});

// use for testing purposes
/*app.use("/test", (req, res) => {
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
}); */

// Create a CURD API for a user

/* app.use(express.json()); // Middleware to parse JSON bodies

// deme data
let users = [
  { name: "razik", age: 25, id: 1, email: "mdrazikkhan554@gmail.com" },
  { name: "yusuf", age: 2, id: 2, email: "yusufkhan108@gmail.com" },
];

//Get all users
app.get("/users", (req, res) => {
  res.json(users);
});
// get user by id
app.get("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send("User not found");
  }
});
// Create a new user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// 4. PUT - replace user
app.put("/users/:id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }
  users[userIndex] = {
    id: parseInt(req.params.id),
    name: req.body.name,
    email: req.body.email,
  };
  res.json(users[userIndex]);
});

// 5. PATCH - update part of user
app.patch("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  if (req.body.name) user.name = req.body.name;
  if (req.body.email) user.email = req.body.email;
  res.json(user);
});
// 6. DELETE - remove user
app.delete("/users/:id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }
  const deletedUser = users.splice(userIndex, 1);
  res.json(deletedUser[0]);
});

// 404 fallback
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
}); */

app.listen(7777, () => {
  console.log("Server is running on port 7777");
});
