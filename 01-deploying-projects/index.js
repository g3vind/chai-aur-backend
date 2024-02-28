const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send({ status: "OK" });
});

app.get("/twitter", (req, res) => {
  res.send("@g3vind");
});

app.get("/login", (req, res) => {
  res.send("<h1>LOGIN PAGE</h1>");
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
