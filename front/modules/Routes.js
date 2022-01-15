import express from 'express'
import dotenv from 'dotenv'

import Basic from './default/default.js'
import Users from './user/index.js'

const Routes = express.Router();
Routes.use('/', Basic)
Routes.use('/members', (req, res) => {
  res.redirect('/users')
})
Routes.use('/users', Users)
Routes.use('*', (req,res) => {
  res.render('pages/404', {
    title: "Je ne comprends pas la demande",
    c404: true,
    message: "Une erreur est surevenue, veuillez réessayer ultérieurement"
  })
})

export default Routes