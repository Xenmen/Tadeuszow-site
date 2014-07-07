var express = require('express');
var server = express();

server.use(
  express.static(__dirname + '/site')
);

var port = 80;
server.listen(port, function() {
    console.log('Server started...');
});