const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send("This is HomePage")
})

app.get('/about', (req, res) => {
    res.send("This is about page")
})

app.post('/login', (req, res) => {
    res.send("This is login page")
})
app.put('/login', (req, res) => {
    res.send("This is login page")
})
app.delete('/login', (req, res) => {
    res.send("This is login page")
})

app.listen(3000)
