{
  /*In Express.js, middleware refers to functions that have access to the request object (req), response object (res), and the next function in the application's request-response cycle. Middleware functions can perform a variety of tasks, such as */
}

// Admin authentication middleware

const adminAuth = (req, res, next) => {
  console.log("Admin authentication middleware called");
  const token = "xyz";
  const isAuthenticated = token === "xyz";
  if (!isAuthenticated) {
    res.status(401).send("unauthorized access");
  } else {
    next();
  }
};

// User authentication middleware
//Middleware function is used to authenticate users before allowing them to access certain routes or resources in a web application.

const userAuth = (res, req, next) => {
  console.log("user authentication middleware called");
  const token = "xyz";
  const isAuthenticated = token === "xyz";
  if (!isAuthenticated) {
    res.status(401).send("unauthorized access");
  } else {
    next();
  }
};

module.exports = { adminAuth, userAuth };
