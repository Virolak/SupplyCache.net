// ##############################
// >>>>>>>>>>| app.js |<<<<<<<<<<
// ##############################

// Dependencies =================
const express = require("express");
// ==============================

// Initialize express
const app = express();

// Point to public directory
app.use(express.static(__dirname + "/public"));

// Render home page
app.get("/", function(request, response) {
    response.render("index.ejs")
});

// Define port
var port = process.env.PORT || 8080

// Listen on port 8080
app.listen(port, function(request, response) {
    console.log("Running supply-cache on port 8080");
});