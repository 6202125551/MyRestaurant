const mongoose = require('mongoose')


const connectDB = async(url) => {
    await mongoose.connect(url)
    .then(() => {
          console.log("Database is connected")
    })
    .catch((err) => {
          console.log("Database connection failed")
    })
}


module.exports = connectDB