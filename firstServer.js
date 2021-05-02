var http = require('http');
http.createServer((req, res) => {
    res.write("Hello world");
    res.end();
}).listen(3000)