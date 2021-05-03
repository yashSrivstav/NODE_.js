const express = require('express')
const app = express();

const checkUrl = (req, res, next) => {
    console.log("current route is", req.originalUrl)
    next();
}

app.use(checkUrl)

app.get('/', (req, res) => {
    res.send("This is HomePage")
})

app.get('/about', (req, res) => {
    res.send("This is about page")
})

app.get('/login', (req, res) => {
    res.send("This is login page")
})
app.get('/login', (req, res) => {
    res.send("This is login page")
})
app.get('/login', (req, res) => {
    res.send("This is login page")
})

app.listen(3000)
