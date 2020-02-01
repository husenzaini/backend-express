const express = require('express');
const Router = express.Router()
const productController = require('../controllers/product')
Router.get('/', productController.getProduct)
module.exports = Router