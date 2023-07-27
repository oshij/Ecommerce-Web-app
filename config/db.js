const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.Mongo_URL)
        console.log(`Connected To Mongodb Database ${conn.connection.host}`)
    }catch(error){
        console.log(`Error in Mongodb ${error}`.bgRed.white)
    }
} 
module.exports = connectDB;;