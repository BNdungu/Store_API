require('dotenv').config()

const connectdb = require('./db/connect')

const product = require('./models/product')

const jsonProducts = require('./products.json')

const start = async () => {
    try {
        await connectdb(process.env.db)
        await product.deleteMany()
        await product.create(jsonProducts)
        console.log('success')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()