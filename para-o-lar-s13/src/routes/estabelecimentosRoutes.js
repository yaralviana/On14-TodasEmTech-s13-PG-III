const express = require("express")
const router = express.Router()
const controller = require('../controller/estabelecimentosController')

router.get('/all', controller.getAll)
router.get('/:id', controller.getId)
router.post("/cadastro", controller.createPetshop);
router.delete("/delete/:id", controller.deletePetshop);
router.patch("/update/:id", controller.updatePetshop);

module.exports = router