require('dotenv').config()
require('express-async-errors')
const express= require ('express')
const app = express()
const connectdb = require('./db/connect')
const products = require('./routes/products')
const notFoundMiddleware = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')
const port = process.env.port

app.use(express.json())
app.use('/api/v1/products',products)
app.use(notFoundMiddleware)
app.use(errorHandler)

const start = async () => {
    try {
        await connectdb(process.env.db)
        app.listen(port, console.log(`Server is listenning at port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()
