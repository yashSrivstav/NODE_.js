const express = require('express')
const app = express()
var bodyParser = require('body-parser')

var encoder = bodyParser.urlencoded();

app.use('/assets', express.static('assets'))

app.set('view engine', 'ejs')
app.get("/profile/:name", (req, res) => {
    // console.log(req.params.name)
    data = { email: "yash@gmail.com", address: "renukoot", skills: ["node js", "sql", "linux"] }
    res.render('profile', { name: req.params.name, data: data })
})

app.get("/login", (req, res) => {
    console.log(req.query)
    res.render("login")
})
app.post("/login", encoder, (req, res) => {
    console.log(req.body)
    res.render("home")
})

app.get("/", (req, res) => {
    res.render("home")
})
app.listen(3000)