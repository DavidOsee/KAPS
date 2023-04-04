//
const express = require('express')
require('dotenv').config()
const app = express()


//Parsers 
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Script and Css files for the static view 
app.use(express.static('public'))


//View engine 
const {engine} = require('express-handlebars')
app.engine('.hbs', engine({extname : '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');



//Route IMPORTS 
const kapsRoutes = require('./routes/kapsRoutes')



//Route inits
app.use('/', kapsRoutes)


//Middleware imports 
const errorHandler = require('./middlewares/errorHandler')


//Middleware init 
app.use(errorHandler)



//Export to index
module.exports = app; 