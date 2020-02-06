const connection = require('../configs/db')
module.exports = {
    getPayment:  (sortBy = "id", asc = 1) =>{
      return new Promise(async(resolve, reject)=>{
        if(sortBy){
        
          const sortableColumn = ['updated', 'id']
          if (!sortableColumn.includes (sortBy)){
            reject(new Error('invalid sort column'))
          }
          const order = asc == -1?'DESC':'ASC'
         
          connection.query("SELECT p.*, u.name as user_name, pr.name as product_name FROM payment as p LEFT JOIN user as u ON p.user_id = u.id LEFT JOIN product as pr ON p.product_id =pr.id ORDER BY "+ sortBy + " " + order, 
          (err, result)=>{
            if(!err){
              console.log(result)
              match.result = result
              resolve(match);
            }else{
              reject(new Error(err));
            }
          }) 
        }
      })
    }
}
