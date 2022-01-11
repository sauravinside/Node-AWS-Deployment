const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("IT WORKED");
});
app.get("/new", function (req, res) {
  res.send("My name is saurav");
});

app.listen(process.env.PORT || 5000);
module.exports = app;
