module.exports = {
    response : (res, result, status, err) =>{
        console.log(res)
        console.log(result)
        console.log(status)
        console.log(err)
        let resultPrint = {}
        resultPrint.status = 'Succes';
        resultPrint.status_code = status;
        resultPrint.result= result;
        resultPrint.err = err || null 
        // return res.status(resultPrint.status_code).json(resultPrint);
        return res;


    }
}


