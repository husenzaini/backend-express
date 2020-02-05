const express = require('express');

const router = express.Router();
const cartController = require('../controllers/cart');
const checkoutControler = require('../controllers/order');
const auth = require('../helpers/auth');

router
    .get('/', cartController.getAllCart)
    .patch('/:cart_id', cartController.editQty)
    .delete('/:cart_id', cartController.deleteCart)
    .post('/order', auth.verify, checkoutControler.checkout)
   


module.exports = router;