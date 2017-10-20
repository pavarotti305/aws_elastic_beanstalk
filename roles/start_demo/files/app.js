// Load the express module.
var express = require('express');
var app = express();

// Respond to requests for / with 'Hello World'.
app.get('/', function(req, res){
    res.setHeader("Content-Type", "text/html");
    res.write('<h2 style="color: blueviolet">Welcome Master Pava!</h2>');
    res.write('<p>Why I have taken so long to understand this stupid trick</p>')
    res.end();
});

// Listen on port 80 (like a true web server).
app.listen(80);
console.log('Express server started successfully.');