//
const errorHandler = (err, req, res, next)=>{

    //CATCH ALL ROUTES STATUS CODES 
    let code = (res.statusCode)? res.statusCode : 500

    //SET ALL ROUTE RESPONSES WITH CAUGHT CODE  
    res.status(code)

    //RETURN ERROR 
    res.json({
        message : err.message, 
        stack : (process.env.NODE_ENV == 'development')? err.stack : null
    })
    //
    next()

}


//EXPORT TO SERVER 
module.exports = errorHandler