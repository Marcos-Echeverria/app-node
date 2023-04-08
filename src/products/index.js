const express = require('express');

const {ProductsController} = require('./controller');

const router = express.Router();

module.exports.ProductsAPI = (app) => {
    router
    .get('/',ProductsController.getProducts) //http://localhost:300/api/products/
    .get('/:id', ProductsController.getProduct) //http://localhost:300/api/products/23
    .post('/', ProductsController.CreateProduct) 

    app.use('/api/products', router)
}