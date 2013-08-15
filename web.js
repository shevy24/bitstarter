var fs = require ('fs');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/assets'));


app.get('/', function(request, response) {
  var data = fs.readFileSync('index.html');
  response.send(data.toString());
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
