// === Initialize ===
// grab npm modules
var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
// initialize express app
var app = express();
// set up the port
var port = process.env.PORT || 3000;
// === Configure ===
// set up express middleware
/*
// uncomment this when set up the favicon
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
*/
app.use(express.static(path.join(__dirname, "public")));
app.use("/bower_components", express.static(path.join(__dirname, "bower_components")));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({type: "application/vnd.api+json"}));
app.use(methodOverride());
// default route to index.html
app.get("*", function(req ,res) {
  res.sendFile("./public/index.html");
});
// === Start server ===
app.listen(port);
console.log("Server started at port " + port);
