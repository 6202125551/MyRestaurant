require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const connectDB = require('./config/db')
connectDB(process.env.MONGO_URI)

const testRoute = require('./routes/testRoutes')
const authRoute = require('./routes/authRoutes')
const userRoute = require('./routes/userRoutes')


const PORT = process.env.PORT || 8080
const app = express()



app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/api/v1/test', testRoute)
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/user', userRoute)


app.get('/', (req, res) => {
    try {
        res.status(200).json({
            status: "Success",
            msg: "Home page"
        }) 
    } catch (error) {
        res.status(404).json({
            status: "Failed",
            msg: error
        })
    }
    
})


app.listen(PORT , () => {
    console.log(`server is listening at port : ${PORT}`)
})