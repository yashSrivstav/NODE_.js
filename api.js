const mongoose = require('mongoose')
const express = require('express')
const app = express()
const hosteler = require('./hostelers')

mongoose.connect('mongodb://hostel:d9Jdw53nXIXDo972@cluster0-shard-00-00.t6tjn.mongodb.net:27017,cluster0-shard-00-01.t6tjn.mongodb.net:27017,cluster0-shard-00-02.t6tjn.mongodb.net:27017/hostel?ssl=true&replicaSet=atlas-zsu6ai-shard-0&authSource=admin&retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })

app.get('/', (req, res) => {
    hosteler.find({ name: "yash" }).then((data) => {
        res.json(data)
    })
})

app.listen(3000)