require('dotenv').config();
const express = require('express');
const next = require('next');
const apiRoutes = require("./api");

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


app.prepare()
  .then(() => {
    const server = express();
    server.use(express.json());

    server.use("/api", apiRoutes);

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;

      console.log("Listening on port 3000");
    })
  })
  .catch(err => {
    console.error(err);
  });