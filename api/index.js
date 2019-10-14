const api = require("express").Router();

//import routers
// const signup = require("../routers/signup");
const login = require("./login");

//middlewares
api.use("*admin*", (req, res, next) => {
  console.log("Authenticate");
  next();
});

//compose routes
//api.use("/signup", signup);
api.use("/login", login);
//etc...

api.all("*", (req, res) => res.send("Route not found."));

module.exports = api;
