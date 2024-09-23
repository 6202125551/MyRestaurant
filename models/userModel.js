const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: [true, 'User Name is required']
    },
    email: {
        type:String,
        required: [ true, 'Email is required'],
        unique:true
    },
    password:{
        type: String,
        required: [true, "Password is required"]
    },
    address: {
        type: Array
    },
    phone:{
        type: Number,
        required: [true, 'Phone is required']
    },
    userType: {
        type: String,
        required: [true, 'userType is required'],
        default: 'client',
        enum: ['client', 'admin', 'vendor', 'driver']
    },
    profile : {
        type: String,
        default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREtbrDrP_BgK9N1P0_pt0EfF5uoq1D5SiSsw&s'
    }



}, {timestamps:true})


module.exports = mongoose.model('User', userSchema)