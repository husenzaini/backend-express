const paymentModel = require('../models/payment');
const miscHelper = require('../helpers/helpers');

module.exports = {
    getPayment: async(req, res) => {
        const sortBy = req.query.sortBy
        const asc = req.query.asc
        const page = req.query.page
        const perPage = req.query.perPage
        let totalData = 0
        try {
          totalData = await paymentModel.countModel('payment')
        } catch (error) {
          console.log(error)
        }
        const total = totalData[0].TOTAL
        paymentModel.getPayment(sortBy, asc, page, perPage)
        .then((result)=>{
          
          const resultPayment = result
         if(!perPage){
           perPage = 5
         }
          resultPayment.totalPage = Math.ceil(total/parseInt(perPage))
         
          miscHelper.response(res, resultPayment)
        })
        .catch(err=>{
            miscHelper.response(res, {}, res.status, err)})

    },
}