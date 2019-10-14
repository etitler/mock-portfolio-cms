const login = require("express").Router();

login.post("/", (req, res) => res.send("Login attempted."));

module.exports = login;