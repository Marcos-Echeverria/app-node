const express = require('express');

const {ProductsController} = require('./controller');

const router = express.Router();

module.exports.ProductsAPI = (app) => {
    router
    .get('/',ProductsController.getProducts) //http://localhost:300/api/products/
    .get('/report', ProductsController.generateReport)
    .get('/:id', ProductsController.getProduct) //http://localhost:300/api/products/23
    .post('/', ProductsController.CreateProduct)
    .put('/:id', ProductsController.updateProduct)
    .delete('/:id', ProductsController.deleteProduct);

    app.use('/api/products', router);
}