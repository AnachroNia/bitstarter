var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  console.log(("blaaaaa"));
  data = fs.readFileSync('index.html'); 
  response.send(data.toString('ascii'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});