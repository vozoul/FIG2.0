import express from 'express'
import {isAuth} from '../services/auth.js'
import User from '../models/Users.mdl.js'
const users = express.Router();

// Get all users
users.get('/', async (req, res) => {
  const users = await User.findAll()
  console.log(users)
  res.json(users)
})

// Add a user
users.post('/', async (req,res) => {
  const isNewPseudo = await User.findOne({where: {pseudo: req.body.pseudo}});
  const isNewMail = await User.findOne({where: {email: req.body.email}});

  if(isNewPseudo != null || isNewMail != null) {
    res.json({error: true, message: 'User already exists'})
  } else {
    const member = await User.create(req.body)
    res.json(member)
  }
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