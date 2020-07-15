'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

 var cors = require('cors')
 app.use(cors())
 app.options('*', cors());

var libro_routes = require('./routes/libroRoute');



const mongoose = require('mongoose')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/api',libro_routes);



mongoose.connect('mongodb+srv://felipezxk:hola1234@cluster0.gutyj.mongodb.net/Taller?retryWrites=true&w=majority', (err, res) => {

    if(err){
        console.log("NO CONECTA")
    }
    app.listen(4000, () => {

        console.log("Esta corriendo en puerto 4000")
    })
})