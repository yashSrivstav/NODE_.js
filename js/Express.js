const express = require('express')
const app = express();
const router = express.Router()
const checkUrl = (req, res, next) => {
    console.log("current route is", req.originalUrl)
    next();
}

// app.use(checkUrl) global

app.get('/', (req, res) => {
    res.send("This is HomePage")
})

app.get('/about', (req, res) => {
    res.send("This is about page")
})

router.get('/login', checkUrl, (req, res) => {
    res.send("This is login page")
})
app.get('/home', (req, res) => {
    res.send("This is login page")
})
app.get('/yes', (req, res) => {
    res.send("This is login page")
})
app.use('/', router)
app.listen(3000)
