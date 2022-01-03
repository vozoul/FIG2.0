import express from 'express'
import {isAuth} from '../services/auth.js'
import User from '../models/Users.mdl.js'
const users = express.Router();

// Get all users
users.get('/', isAuth, async (req, res) => {
  //TODO
})

// Add a user
users.post('/', (req,res) => {
  User.create(req.body).then(() => {
    message = "user added to DB"
    res.status(200).json(message)
  }).catch(err => {
    message = `${err} - Error during registering new user call an admin`
    res.status(500).json(message)
  })
})

// Get profil
users.get('/:id', (req,res) => {
  //TODO
})

// Modify profil
users.put('/:id', (req,res) => {
  //TODO
})

// Delete profil
users.delete('/:id', (req,res) => {
  //TODO
})

export default users