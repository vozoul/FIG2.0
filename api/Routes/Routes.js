import express from 'express'
import users from './Users.js'

import basis from '../models/models.js'

const Routes = express.Router();

Routes.get('/',(req, res) => {
  res.json({
    "message":"Welcome to my API"
  })
})

Routes.use('/users', users)

export default Routes