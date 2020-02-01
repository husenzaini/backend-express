const productModel = require('../models/product')
const miscHelper = require('../helpers/helpers');
module.exports = {
    getProduct: (req, res)=>{
        productModel.getProduct()
        .then((result)=>{
          miscHelper.response(res, result)
        })
        .catch(err=>console.log(err));
      },
    productDetail: (req, res) =>{
        const id_product = req.params.id_product;
        productModel.productDetail(id_product)
          .then((result) => {
            res.json(result)
          })
          .catch(err => console.log(err));
      },
}