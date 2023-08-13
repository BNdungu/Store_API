const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'name must be provided']
    },

    price:{
        type:String,
        required: [true, 'price must be provided']
    },
    featured:{
        type:Boolean,
        default: false,
        required: [true, 'name must be provided']
    },
    rating:{
        type:Number,
        dafault: 4.5
    },
    createdAt:{
        type:Date,
        dafault: Date.now
    },
    company:{
        type:String,
        enum: {
            values: ['ikea','liddy','caressa','marcos'],
            message: '{VALUE} is not supported',
        }
        // enum: ['ikea','liddy','carresa','marcos']
    },
})

module.exports = mongoose.model('Product', schema)