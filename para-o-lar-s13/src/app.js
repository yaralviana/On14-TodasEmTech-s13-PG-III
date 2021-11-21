const express = require('express')
const cors = require('cors')

require('dotenv-safe').config()
const db = require('./database/mongoConfig')

const estabelecimentosRoutes = require('./routes/estabelecimentosRoutes')

const app = express()

app.use(cors())
app.use(express.json())
app.use("/petshops", estabelecimentosRoutes)

db.connect() 

module.exports = app