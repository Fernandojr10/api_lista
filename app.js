const express = require('express')
const mongoose = require('mongoose')
const cors = require ('cors')
const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect('URL do BD')

require('./src/models/product')


app.use('/', require('./src/routes'))


app.listen(3000)


