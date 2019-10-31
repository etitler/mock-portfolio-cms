require("dotenv").config();
const { createUser } = require("../queries");

const user = {
  username: "user",
  email: "example@email.com",
  password: "password",
  role: "admin"
}

//verify user doesn't already exist. Identical users can be created with this script

createUser(user, console.log);