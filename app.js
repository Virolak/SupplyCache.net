// ##############################
// >>>>>>>>>>| app.js |<<<<<<<<<<
// ##############################

// Dependencies =================
const express = require("express");
// ==============================

// Initialize express
const app = express();

// Render home page
app.get("/", function(request, response) {
    response.send("Welcome to the Suppy Cache");
});

// Listen on port 8080
app.listen("8080", function(request, response) {
    console.log("Running supply-cache on port 8080");
});