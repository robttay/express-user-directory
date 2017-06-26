//
const express = require("express");
const mustacheExpress = require("mustache-express");
var data = require("./data");
const path = require("path");
const app = express();
const port = 8000;

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", "./public");

app.use(express.static("public"));
app.get("/", function(req, res) {
  res.render("index", data);
});

app.get("/profile/:id", function(req, res) {
  var index = req.params.id - 1;
  res.render("profile", data.users[index]);
});

app.listen(port, function() {
  console.log("Starting app on PORT: " + port + "...");
});
