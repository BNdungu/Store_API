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
