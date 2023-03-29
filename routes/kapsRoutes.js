//
const express = require('express')
const router = express.Router()

const {Home} = require('../controllers/kapsController.js')

//Middlewares
//const protected = require('../middlewares/protect')


//
router.get('/', Home)



//Export to server 
module.exports = router; 