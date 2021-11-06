const mongoose = require('mongoose');


const MONGODB_URI = process.env.MONGO_URI

const connect = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Banco conectado (:")
    } catch (error) {
        console.log("Erro ao conectar com o banco: ", error.message)
    }
}

module.exports = {
    connect
}