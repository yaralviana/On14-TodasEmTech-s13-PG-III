const mongoose = require('mongoose')

const petshopSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,

    name: {
        type: String,
        required: true
    },
    bairro: {
        type: String,
        required: true   
    },
    pagamento: {
        type: Array,
    },
    likes: {
        type: Number,
    },
})

module.exports = mongoose.model('petshops', petshopSchema)