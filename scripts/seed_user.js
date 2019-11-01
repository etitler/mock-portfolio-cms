require("dotenv").config();
const { getUsers, createUser } = require("../queries");

const adminUser = {
  username: "user",
  email: "example@email.com",
  password: "password",
  role: "admin"
}

getUsers((results) => {
  const userExists = results.filter(user => {
    return adminUser.username === user.username;
  });
  if (!userExists) {
    createUser(adminUser, res => {
      console.log("User created:\n", res);
    });
  } else {
    throw new Error("User already exists.");
  };
});
