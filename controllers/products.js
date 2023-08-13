const products = require('../models/product')

const getAllProductsStatic = async (req,res) => {
    // throw new Error('Something somewhere went wrong')

    const prod = await products.find()
    res.status(200).json({prod, nbHits: prod.length})
}

const getAllProducts = async (req,res) => {
    const item = req.query
    const prod = await products.find(item)
    res.status(200).json({prod: prod,nbHits: prod.length})
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}