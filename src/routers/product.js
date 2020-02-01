const express = require('express');
const Router = express.Router()
const productController = require('../controllers/product')

Router
.get('/', productController.getProduct)
.get('/:id_product', productController.productDetail)

module.exports = Router
