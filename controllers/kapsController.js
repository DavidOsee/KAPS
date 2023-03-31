//
const asyncHandler = require('express-async-handler')
const uuid = require('uuid')
const momo = require("mtn-momo")
const Cryptr = require('cryptr')
// const cryptr = new Cryptr(process.env.SECRET_KEY)

//Localstorage
// var LocalStorage = require('node-localstorage').LocalStorage;
// localStorage = new LocalStorage('./localStorage');


//API CONFIG PARAMS
// const { Collections } = momo.create({
//   callbackHost: process.env.CALLBACK_HOST
// })

// const collections = Collections({
//   userSecret: "445477d7de844d2c816b2ede39da32b7",
//   userId: "69eba058-e091-4d86-8f1d-22f97f4050ee",
//   primaryKey: process.env.PRIMARY_KEY
// })

//INITIALIZING MOMO LIBRARY
const { Disbursements } = momo.create({
  callbackHost: process.env.CALLBACK_HOST
})

//Initialising disbursements
const disbursements = Disbursements({
  userSecret: process.env.USER_SECRET,
  userId: process.env.USER_ID,
  primaryKey: process.env.PRIMARY_KEY
})



//HOME  @ / [GET]
//@ Public access 

const Home = asyncHandler( async(req, res)=>
{
	//
  res.render('home')
  

}) //End Home controller 



//GETPAID  @ / [POST]
//@ Private access
const GetPaid = asyncHandler (async(req,res)=>{

  //Destructure Form values
  const { fname, lname, number, amount} = req.body;

  //Disbursements
  disbursements
  .transfer({
    amount: parseInt(amount),
    currency: "EUR",
    externalId: "947354",  //Self Momo number 
    payee: {
      partyIdType: "MSISDN", //Mesage type notification/alert 
      partyId: number //Client phone number 
    },
    payerMessage: "testing message",
    payeeNote: "Thanks for using our services",
    callbackUrl: process.env.CALLBACK_URL
  })
  .then(transactionId => {
    console.log({ transactionId });

    // Get transaction status
    return disbursements.getTransaction(transactionId)
    console.log(transactionId)
    return false

    //
    res.redirect(`/success/${transactionID}`)
  })
  .catch(error => {
    console.log(error);
  });
})




//SUCCESS  @ / [GET]
//@ Private access 

const Success = asyncHandler (async(req,res)=>{

  //
  res.render('success')
})



//Export to kapsRoutes 
module.exports = {
	Home, Success, GetPaid
}