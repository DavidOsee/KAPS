
const jwt = require('jsonwebtoken')

//Localstorage
const LocalStorage = require('node-localstorage').LocalStorage 
const localStorage = new LocalStorage('./scratch') 

let token_stringified = JSON.stringify(localStorage.getItem("token"))  


//
const Protect = (req, res, next)=>{

    //IF TOKEN EXISTS / EXPIRED >> REDIRECT TO HOME PAGE [401 - UNAUTHORIZED]
    if (token_stringified) 
    {
        //Set token var 
        let token

        try {
            //GET TOKEN 
            token = localStorage.getItem("token")

            //VERIFY JWT TOKEN AND STORE IT IN THE Req OBJ 
            // jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
            //     if (!err) {
            //         req.transaction_details = decoded
            //     }else{
            //         err = {
            //             name: 'TokenExpiredError',
            //             message: 'JWT expired'
            //         }
            //     }
            //   })
            token = jwt.verify(token, process.env.SECRET_KEY)

            //Assign to the req OBJ
            req.transaction_details = token

            //OK
            //res.status(200)

        } catch (error) {
            console.log(error)
            //
            res.status(401).redirect('/')
            throw new Error("UNAUTHORIZED")
        }
        
    }

    console.log(req.transaction_details)

    //IF TOKEN DOES NOT EXIST
    if(token_stringified == undefined || token_stringified == "" ){
        res.status(401).redirect('/')
        throw new Error('Unauthorized, no token found')
    }
    
    //
    next()
}

//EXPORT TO ROUTES 
module.exports = Protect