const debug = require('debug')('app:module-products-controller');

const {ProductsService} = require('./services');

module.exports.ProductsController ={
    getProducts: async (req, res) => {
        try {
            let product = await ProductsService.getAll()
            res.json(product)
        } catch (error) {
            res.status(500).json({message: "Internal server error"})
            debug(error)
        }
    },
    getProduct: (req, res) => {},
    CreateProduct: (req, res) => {},
}