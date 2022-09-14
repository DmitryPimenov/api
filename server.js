require('dotenv').config();
var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/Кто?", function (req, res) {
  console.log(req.headers)
  const ipaddress = req.ip
  const language = req.headers['accept-language']
  const software = req.headers['sec-ch-ru']
  res.json({ipaddress: ipaddress,language:language,software:software});
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
