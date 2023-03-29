//
const asyncHandler = require('express-async-handler')
const uuid = require('uuid')
const momo = require("mtn-momo")
const Cryptr = require('cryptr')
// const cryptr = new Cryptr(process.env.SECRET_KEY)




//API CONFIG PARAMS
// const { Collections } = momo.create({
//   callbackHost: process.env.CALLBACK_HOST
// })

// const collections = Collections({
//   userSecret: "445477d7de844d2c816b2ede39da32b7",
//   userId: "69eba058-e091-4d86-8f1d-22f97f4050ee",
//   primaryKey: process.env.PRIMARY_KEY
// })


//HOME  @ / [GET]
//@ Public access 

const Home = asyncHandler( async(req, res)=>
{
	//
  res.render('home')
  
  //Delete the alert 
})





//Export to kapsRoutes 
module.exports = {
	Home
}