const
    http = require('http'),
    fs = require('fs'),
    url = require('url'),
    path = require('path');

http.createServer(function(request, response) {
    var uri = url.parse(request.url).pathname,
        filename = path.join(process.cwd(), uri);
    console.log("Serving: " + filename);
    fs.readFile(filename, 'binary', function(err, file) {
        response.writeHead(200);
        response.write(file, 'binary');
        response.end();
    })
}).listen(8080);
