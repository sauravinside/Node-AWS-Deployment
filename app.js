const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("IT WORKED And my name is Sandeep Malla.");
});
app.get("/new", function (req, res) {
  res.send("My name is Sandeep");
});

app.listen(process.env.PORT || 5000);
module.exports = app;
