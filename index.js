const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.get("/profile/:name", (req, res) => {
    // console.log(req.params.name)
    data = { email: "yash@gmail.com", address: "renukoot", skills: ["node js", "sql", "linux"] }
    res.render('profile', { name: req.params.name, data: data })
})

app.listen(3000)