//
const express = require('express')
const router = express.Router()

const {Home, Success, GetPaid} = require('../controllers/kapsController.js')

//Middlewares
//const protected = require('../middlewares/protect')


//
router
.get('/', Home)
.get('/success', Success)

//POST REQ
router
.post('/getpaid', GetPaid)



//Export to server 
module.exports = router; 