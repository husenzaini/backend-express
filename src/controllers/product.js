const productModel = require('../models/product')
const miscHelper = require('../helpers/helpers');
module.exports = {
    getProduct: (req, res)=>{
        productModel.getProduct()
        .then((result)=>{
          miscHelper.response(result)
        })
        .catch(err=>console.log(err));
      },
}