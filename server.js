var express = require('express');
var app = express();
var path = require('path');


app.use(express.static(path.join(__dirname, 'arwork')));

var server = app.listen(process.env.PORT || 5555 , function () {
    var port = server.address().port;
    console.log("Express is working on port " + port);
  });