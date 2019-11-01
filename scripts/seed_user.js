require("dotenv").config();
const bcrypt = require("bcrypt");
const { getUsers, createUser } = require("../queries");

const adminUser = {
  username: "user",
  email: "example@email.com",
  password: bcrypt.hashSync("password", 10, (error, hash) => {
    if (error) {
      throw new Error(error)
    }

    return hash;
  }),
  role: "admin"
}

getUsers((results) => {
  const userExists = results.filter(user => {
    return adminUser.username === user.username;
  }).length > 0;

  if (!userExists) {
    return createUser(adminUser, res => {
      console.log("User created:\n", res);
      process.exit(0);
    });
  } else {
    throw new Error("User already exists.");
  };
});
