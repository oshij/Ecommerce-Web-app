const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MongoURL)
    }catch(error){
        console.log(`Error in Mongodb ${error}`.bgRed.white)
    }
} 