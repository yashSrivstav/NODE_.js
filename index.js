const express = require('express')
const app = express();
const checkUrl = require('./js/middleware')
const router = express.Router()

// app.use(checkUrl) global

app.get('/', (req, res) => {
    // res.send("This is HomePage")
    res.sendFile(__dirname + '/html/home.html')
})

app.get('/about', (req, res) => {
    // res.send("This is about page")
    res.sendFile(__dirname + '/html/about.html')
})

router.get('/login', checkUrl, (req, res) => {
    res.sendFile(__dirname + '/html/login.html')
})
router.get('/home', checkUrl, (req, res) => {
    res.send("This is login page")
})
app.get('/yes', (req, res) => {
    res.send("This is login page")
})
app.use('/', router)
app.listen(3000)
