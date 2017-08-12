var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors');
var morgan = require('morgan');
var api = require('./api');

// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Enable logging
app.use(morgan("combined"));

// Enable CORS
app.use(cors());

// Set content body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Static folders
app.use("/dist", express.static("./dist"));
app.use("/content", express.static("./content"));


// -------------------------------------------------
// Configure all routes inside api folder
api.configureRoutes(app);

// Main "/" Route. This will redirect the user to our rendered React application
app.get("*", function (req, res, next) {
    if (req.url.startsWith("/api/")) return next();
    res.sendFile(__dirname + "/index.html");
});

// -------------------------------------------------

// Starting our express server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});