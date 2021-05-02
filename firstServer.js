var http = require('http')
var page = `
<h1>Hello Node</h1>
<input type = 'text'/> <br><br>
<input type = 'text'/>  <br><br>
<input type = 'text'/>`
var data = { name: "Yash" }
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(page)
    res.end()
}).listen(3000)