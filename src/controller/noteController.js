const noteSchema = require('../models/noteSchema')

const getAll = async (req, res) => {
    try {
        const notes = await noteSchema.find()
        res.status(200).json(notes)

    } catch (error) {
        res.status(500).json({
            mensagem: error.message,
        })
    }
}

module.exports = {
    getAll
}