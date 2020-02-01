const connection = require('../configs/db')
module.exports = {
    getProduct: () =>{
      return new Promise((resolve, reject)=>{
        connection.query("SELECT * FROM `product_name` LEFT JOIN `category` ON `product_name`.`id_category`= `category`.`id` ", (err, result)=>{
          if(!err){
            resolve(result);
          }else{
            reject(new Error(err));
          }
        })
      })
    },
    productDetail: (id_product) => {
        return new Promise((resolve, reject) => {
          connection.query("SELECT product_name.*, category.name_category FROM product_name INNER JOIN category ON product_name.id_category = category.id WHERE product_name.id = ?", id_product, 
          (err, result) => {
            if (!err) {
              resolve(result);
            } else {
              reject(new Error(err));
            }
          })
        })
      }
}
