const petshopSchema = require('../models/petshopSchema')
const mongoose = require('mongoose');

// GET ALL
const getAll = async (req, res) => {
    try {
        const petshopFound = await petshopSchema.find();
        res.status(200).send(petshopFound);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
// GET ONE
const getId = async (req, res) => {
    try {
        const petshopFound = await petshopSchema.findById(req.params.id);
        res.status(200).json(petshopFound);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

// UPDATING ONE
const updatePetshop = async (req, res) => {
    try { 
        const petshopFound = await petshopSchema.findById(req.params.id)

        
        if (petshopFound) {
            petshopFound.name = req.body.name || petshopFound.name
            petshopFound.bairro = req.body.bairro || petshopFound.bairro
            petshopFound.pagamento = req.body.pagamento || petshopFound.pagamento
            petshopFound.likes = req.body.likes || petshopFound.likes

            const petshopSave = await petshopFound.save()
            res.status(200).json({
                artista: petshopSave
            })
        }

        res.status(400).json({
            mensagem: "Desculpe, mas não conseguimos encontrar essa banda e/ou artista"
        })
    } catch (error) {
        res.status(500).send(error.message);
    }
}
// CREATING
const createPetshop = async (req, res) => {
    try {
        const petshop = new petshopSchema({
            name: req.body.name,
            bairro: req.body.bairro,
            pagamento: req.body.pagamento,
            likes: req.body.likes,
            _id: new mongoose.Types.ObjectId()
        })
        const petshopSalvo = await petshop.save()
        res.status(201).json({
            petshop: petshopSalvo
        })
    } catch(error) {
        res.status(400).json({
            message: error.message,
        })
    }
}
// DELETE
const deletePetshop = async (req, res) => {
    try {
        const petshopFound = await petshopSchema.findById(req.params.id)
        await petshopFound.delete()

        res.status(200).json({
            message: `"${petshopFound.name}" deletado com sucesso"  `
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

module.exports = {
    getAll,
    getId,
    updatePetshop,
    createPetshop,
    deletePetshop
}