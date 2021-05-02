var http = require('http');
var data = [{ name: 'Yash', age: "20", email: "yashsv51@gmail.com" },
{ name: 'Mohit', age: "20", email: "Mohit@gmail.com" },
{ name: 'Sagar', age: "20", email: "Sagar@gmail.com" }]
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application\json' })
    res.write(JSON.stringify(data));
    res.end();
}).listen(3000)