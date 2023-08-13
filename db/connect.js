// const mongoose = require('mongoose')

// const connectDB = (url) => {
//   return mongoose.connect(url, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log(`\nSERVER IS LISTENNING AT PORT: ${port}\n`))
//     .catch((err) => console.log('\nSERVER COULDN\'T CONNECT TO THE DATABASE\n'))
// }

// module.exports = connectDB

const mongo = require('mongoose')

const connectDB = ((url) => {
    return mongo.connect(url,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(() => console.log(`\nConnected to the Database`))
    .catch((err) => console.log(err))
})

module.exports = connectDB
