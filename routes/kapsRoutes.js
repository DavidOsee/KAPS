//
const express = require('express')
const router = express.Router()

const {Home, Success, GetPaid, NotFound} = require('../controllers/kapsController.js')

//Middlewares
const Protect = require('../middlewares/authMiddleware.js')


//
router
.get('/', Home)
.get('/success', Protect, Success)
.get('*', NotFound)

//POST REQ
router
.post('/getpaid', GetPaid)



//Export to server 
module.exports = router; 