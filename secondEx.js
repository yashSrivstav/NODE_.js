var http = require('http')
var fs = require('fs')
http.createServer((req, res) => {
    fs.readFile('secondEx.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        res.end()
    })
}).listen(3000)
