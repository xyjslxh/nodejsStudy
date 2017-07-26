var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    fs.readFile('data.txt', 'utf-8', function(error, data) {
        res.end(data,'utf-8');
    });
}).listen(3000);