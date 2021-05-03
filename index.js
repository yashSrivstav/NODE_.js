const express = require('express')
const app = express()

app.use('/assets', express.static('assets'))

app.set('view engine', 'ejs')
app.get("/profile/:name", (req, res) => {
    // console.log(req.params.name)
    data = { email: "yash@gmail.com", address: "renukoot", skills: ["node js", "sql", "linux"] }
    res.render('profile', { name: req.params.name, data: data })
})

app.get("/login", (req, res) => {
    res.render("login")
})
app.get("/", (req, res) => {
    res.render("home")
})
app.listen(3000)