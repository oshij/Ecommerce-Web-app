const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim:true // for removine jitna bhi white space
    },
    email : {
        type: String,
        required: true,
        unique: true // ek email se ek user hi enter kare ga ,there for we are using unique true
    },
    password:{
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0
    }
    
},{ timestamps: true }); // jab bhi new user create hooga  to created time register hoojaye gaa);
module.exports = mongoose.model('users',userSchema)