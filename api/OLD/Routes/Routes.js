const Routes = require('express').Router();
const Users = require('./Users.js')

// api root
Routes.get('/',(req, res) => {
  res.status(200)
  res.json({
    "message":"Welcome to FIG API"
  })
})

Routes.use('/users', Users)

Routes.use('*', (req,res) => {
  res.status(500)
  res.json({
    error: true,
    message: "Error occured... Please try later"
  })
})

module.exports = Routes