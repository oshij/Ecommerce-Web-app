const express = require('express')
const colors = require('colors')
// rest object
const app = express()

// rest api
// '/' means it will be at home
// you can also write normall function in bellow but best way is to write arrow function
app.get('/',(req,res) => {
    res.send('<h1>Welcome to ecommerce app</h1>')
})
//PORt
const PORT = 8000

//run listen
app.listen(PORT, () =>{
    console.log(`Server Running on : ${PORT}`.bgCyan.white)
})