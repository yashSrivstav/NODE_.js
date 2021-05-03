const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Yash:E9hKvVYVAhhptKT0@cluster0.t6tjn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/Test',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => { console.log("Connected Successfully!!") })