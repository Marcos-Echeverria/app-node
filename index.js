const express = require('express');
const debug = require('debug')('app:main');

const {Config} = require('./src/config/index');
const {ProductsAPI} = require('./src/products/index');
const app = express();
const {UsersAPI} = require('./src/users');

app.use(express.json());

//modulos
ProductsAPI(app);
UsersAPI(app);

//
app.listen(Config.port, () =>{
    debug(`Servidor escuchando en el puerto ${Config.port}`)
});