const express = require('express')
const app = express()
const mongoose = require('mongoose')
const hosteler = require('./hostelers')

mongoose.connect('mongodb://hostel:d9Jdw53nXIXDo972@cluster0-shard-00-00.t6tjn.mongodb.net:27017,cluster0-shard-00-01.t6tjn.mongodb.net:27017,cluster0-shard-00-02.t6tjn.mongodb.net:27017/hostel?ssl=true&replicaSet=atlas-zsu6ai-shard-0&authSource=admin&retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })

hosteler.find({}, (err, data) => {
    if (err) console.log(err)
    console.log(data)
})

const data = new hosteler({
    _id: new mongoose.Types.ObjectId,
    name: "Riya Goel",
    email: "riya@gmail.com",
    address: "turra"
})
data.save().then((result) => {
    console.log("inserted")
}).catch((err) => { console.log(error) })