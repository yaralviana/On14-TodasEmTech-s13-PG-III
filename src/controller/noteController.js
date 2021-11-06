const NoteSchema = require('../models/noteSchema')
const mongoose = require('mongoose')

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

const findNoteById = async (req, res) => {
    try {
      const noteFound = await NoteSchema.findById(req.params.id)
          res.status(200).json(noteFound)
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
            message: error.message,
        })
    }
}

const updateNoteById = async (req, res) => {
    try {
        const noteFound = await NoteSchema.findById(req.params.id)

        if (noteFound) {
            noteFound.author = req.body.author || noteFound.author
            noteFound.title = req.body.title || noteFound.author


            const savedNote = await noteFound.save()
            res.status(200).json({
                note: savedNote
            })
        }

        res.status(400).json({
            message: "Não foi possível encontrar a nota"
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}


const deleteNoteById = async (req, res) => {
    try {
        const noteFound = await NoteSchema.findById(req.params.id)

       await noteFound.delete()

       res.status(200).json({
           message: `Nota '${noteFound.title}' deletada com sucesso!`
       })

    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}




module.exports = {
    getAll,
    createNote,
    findNoteById,
    updateNoteById,
    deleteNoteById
}