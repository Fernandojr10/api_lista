const mongoose = require('mongoose')

const Product = mongoose.model('Product')

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query
        const product = await Product.paginate({}, { page, limit: 10 })

        return res.json(product)
    },

    async show(req, res) {
        const product = await product.findById(req.params.id)

        return res.json(product)
    },

    async store(req, res) {
        const product = await product.create(req.body)

        return res.json(product)
    },

    async update(req, res) {
        const product = await product.findByIdAndUpdate(req.params.id, req.body, {new: true})

        return res.json(product)
    },
    
    async destroy(req, res) {
        await product.findByIdAndRemove(req.params.id)

        return res.send()
    }
}