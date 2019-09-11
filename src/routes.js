const express = require("express")
const routes = express.Router()

const Products = require("./controllers/controller")

routes.get('/products', Products.index)
routes.get('/products/:id', Products.show)
routes.post('/products', Products.store) 
routes.put('/products/:id', Products.update)
routes.delete('/products/:id', Products.destroy)

module.exports = routes