const connection = require('../configs/db')
module.exports = {
    getProduct: () =>{
      return new Promise((resolve, reject)=>{
        connection.query("SELECT * FROM product_name", (err, result)=>{
          if(!err){
            resolve(result);
          }else{
            reject(new Error(err));
          }
        })
      })
    }
}