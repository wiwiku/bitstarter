var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var rawBuffer = fs.readFileSync('index.html');

var readData = rawBuffer.toString();

app.get('/', function(request, response) {
  response.send(readData);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
