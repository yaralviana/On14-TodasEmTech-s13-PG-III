const express = require('express')
const cors = require('cors')

require('dotenv-safe').config()
const db = require('./database/mongoConfig')

const noteRoutes = require('./routes/noteRoutes')

const app = express()

app.use(cors())
app.use(express.json())
app.use("/note", noteRoutes)

db.connect() 

module.exports = app