const login = require("express").Router();
const bcrypt = require("bcrypt");
const { getUserByUsername } = require("../queries");

login.get("/", (req, res) => {

  const data = req.headers.authorization.split(" ")[1];
  const buff = Buffer.from(data, 'base64');
  const text = buff.toString('ascii');

  const [username, password] = text.split(":");

  getUserByUsername(username, results => {
    const userRecord = results.rows[0];
    if (!userRecord)
      return res.status(401).send("Authorization failed.");

    const authSuccess = bcrypt.compareSync(password, userRecord.password);
    if (!authSuccess)
      return res.status(401).send("Authorization failed.");

    res.send("Token");
  });
});



module.exports = login;