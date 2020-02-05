const connection = require('../configs/db')
module.exports = {
    getProduct: (name = "", description = "", sortBy ="id", asc =1, page=1, perPage= 5) =>{
      return new Promise((resolve, reject)=>{
        if(name || description || sortBy || page || perPage){
          const match = {}
          const sortableColumn = ['name', 'id_category', 'update_at', 'id']
          if(!sortableColumn.includes(sortBy)){
            reject(new Error ('invalid sort column'))
          }
          const order = asc === -1?'DESC':'ASC'
          const start = (parseInt(perPage)*parseInt(perPage)-parseInt(perPage))
          match.page = page
          match.perPage = perPage

          connection.query("SELECT p. *, c.name as category_name FROM product as p LEFT JOIN categoty as c ON p.id_category = c.id WHERE p.name LIKE '%"+name+"%' AND description LIKE '%"+description+"%' + " + sortBy + " " + order + " LIMIT ?,?", [parseInt(start), parseInt(perPage)],
          (err, result)=>{
            if(!err){
              match.result = result
              resolve(match);
            }else{
              reject(new Error(err));
            }
          }) 
        }
        connection.query("SELECT * FROM `product_name` LEFT JOIN `category` ON `product_name`.`id_category`= `category`.`id` ", (err, result)=>{
          if(!err){
            resolve(result);
          }else{
            reject(new Error(err));
          }
        })
      })
    },
    countModel: (tabel) =>{
      return new Promise((resolve, reject)=>{
        connection.query("SELECT count(*) as TOTAL FROM " + tabel,
        (err, result)=>{
          if(!err) {
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
      },
      insertProduct: (data) => {
        return new Promise((resolve, reject) => {
          connection.query("INSERT INTO product_name SET ?", data, 
          (err, result) => {
            if (!err) {
              resolve(result);
            } else {
              reject(new Error(err));
            }
          })
        })
      },
      updateProduct: (id_product, data) => {
        return new Promise((resolve, reject) => {
          connection.query("UPDATE product_name SET ? WHERE id = ?", [data, id_product], 
          (err, result) => {
            if (!err) {
              resolve(result);
            } else {
              reject(new Error(err));
            }
          })
        })
      },
      deleteProduct: (id_product) => {
        return new Promise((resolve, reject) => {
          connection.query("DELETE FROM product_name WHERE id = ?", id_product, 
          (err, result) => {
            if (!err) {
              resolve(result);
            } else {
              reject(new Error(err));
            }
          })
        })
      },
      addToCart:(data) =>{
        return new Promise((resolve, reject) => {
          connection.query("INSERT INTO cart SET ?", data, 
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
