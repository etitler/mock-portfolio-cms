require("dotenv").config();
const { createUser } = require("../queries");

const user = {
  username: "user",
  email: "example@email.com",
  password: "password",
  role: "admin"
}

createUser(user, console.log);