const express = require('express')
require('dotenv').config()
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('./config/db')


// rest object
const app = express()

//database config
connectDB()

//middelwares 
app.use(express.json())
app.use(morgan('dev'))

// rest api
// '/' means it will be at home
// you can also write normall function in bellow but best way is to write arrow function
app.get('/',(req,res) => {
    res.send('<h1>Welcome to ecommerce app</h1>')
})
const PORT = process.env.PORT;
//run listen
app.listen(PORT, () =>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on : ${PORT}`.bgCyan.white)
})