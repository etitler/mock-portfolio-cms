const api = require("express").Router();
const { getUsers } = require("../queries");

//import routers
// const signup = require("../routers/signup");
const login = require("./login");
const contact = require("./contact");

//middlewares
api.use("*admin*", (req, res, next) => {
  console.log("Authenticate");
  next();
});

//compose routes
//api.use("/signup", signup);
api.get("/users", async (req, res) => {
  getUsers(results => res.send(results));
});
api.use("/login", login);
api.use("/contact", contact);
//etc...

api.all("*", (req, res) => res.send("Route not found."));

module.exports = api;
