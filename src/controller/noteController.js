const NoteSchema = require('../models/noteSchema')
const mongoose = require('mongoose')

const getAll = async (req, res) => {
    try {
        const notes = await NoteSchema.find()
        res.status(200).json(notes)

    } catch (error) {
        res.status(500).json({
            mensagem: error.message,
        })
    }
}

const noteById = async (req, res) => {
    try {
      const searchedNote = await NoteSchema.findById(req.params.id)
          res.status(200).json(searchedNote)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const createNote = async (req, res) => {
    try {
        const note = new NoteSchema({
            author: req.body.author,
            title: req.body.title,
            createdAt: req.body.createdAt,
            _id: new mongoose.Types.ObjectId()
        })

        const savedNote = await note.save()
        res.status(201).json({
            note: savedNote,
        })

    } catch(error) {
        res.status(500).json({
            mensagem: error.message,
        })
    }
}



module.exports = {
    getAll,
    createNote,
    noteById
}