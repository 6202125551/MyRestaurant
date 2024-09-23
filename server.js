require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const testRoute = require('./routes/testRoutes')


const PORT = process.env.PORT || 8080
const app = express()



app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use('/api/v1/test', testRoute)


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