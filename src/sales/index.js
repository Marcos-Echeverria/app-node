const express = require('express');

const {SalesController} = require('./controller');

const router = express.Router();

module.exports.UsersAPI = (app) => {
    router

    app.use('/api/users', router);
}
