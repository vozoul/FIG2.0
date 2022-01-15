import express from 'express'
import users from './Users.js'
// import roles from './Role.js'
// import events from './Events.js'

// import basis from '../models/models.js'

const Routes = express.Router();

// api root
Routes.get('/',(req, res) => {
  res.status(200)
  res.json({
    "message":"Welcome to my API"
  })
})

Routes.use('/users', users)
// Routes.use('/events', events)

// api call error
Routes.use('*', (req,res) => {
  res.status(500)
  res.json({
    error: true,
    message: "Error occured... Please try later"
  })
})

export default Routes