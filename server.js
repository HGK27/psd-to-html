var express = require('express')
var path = require('path')
var app = express();

app.use('/css', express.static(__dirname + '/css'));
app.use('/main.css', express.static(__dirname + '/main.css'));
app.use('/index.js', express.static(__dirname + '/index.js'));
app.use('/img', express.static(__dirname + '/img'));

app.get("/", function (request, response) {
  response.sendFile(path.join(__dirname, "index.html"));
});

app.listen(9090)