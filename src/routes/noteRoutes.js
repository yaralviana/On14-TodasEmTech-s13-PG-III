const express = require("express")

const router = express.Router()

const controller = require("../controller/noteController")

router.get("/all", controller.getAll)
router.post("/create", controller.createNote)

router.get("/:id", controller.findNoteById)

router.patch("/update/:id", controller.updateNoteById)
router.delete("/delete/:id", controller.deleteNoteById)

module.exports = router