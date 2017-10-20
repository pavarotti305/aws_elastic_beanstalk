// Load the http module.
var http = require('http');
http.createServer(function(req, res) {
    res.setHeader("Content-Type", "text/html");
    res.write('<h2 style="color: blueviolet">Welcome Master Pava!</h2>');
    res.write('<p>Why I have taken so long to understand this stupid trick</p>')
    res.end();
}).listen(80);
console.log('The http server have started successfully.');