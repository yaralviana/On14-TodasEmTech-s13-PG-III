const mongoose = require('mongoose');


const MONGODB_URI = process.env.MONGODB_URI


// alt+z
// <password> = 11aa22aa33aa

const connect = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("banco conectado!")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    connect
}