//
const express = require('express')
const router = express.Router()

const {Home, Success, GetPaid, NotFound} = require('../controllers/kapsController.js')

//Middlewares
//const protected = require('../middlewares/protect')


//
router
.get('/', Home)
.get('/success', Success)
.get('*', NotFound)

//POST REQ
router
.post('/getpaid', GetPaid)



//Export to server 
module.exports = router; 