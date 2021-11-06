const NoteSchema = require('../models/noteSchema')

const getAll = async (req, res) => {
    try {
        const notes = await NoteSchema.find()
        res.status(200).json(notes)

    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}

module.exports = {
    getAll
}