// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const methodOverride = require('method-override')
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE (must be added above routes)

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  })
  
// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
  res.render('page404')
})

// LISTEN
app.listen(PORT, () => {
  console.log('nomming at port', PORT);
})

