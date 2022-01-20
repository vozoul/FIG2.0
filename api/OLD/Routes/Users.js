const users = require('express').Router();
const User = require('../../models').User;
const Role = require('../../models').Role;

users.get('/all', async (req, res) => {
  const users = await User.findAll({attributes: ["id", "pseudo", "avatar", "role"]})
  const roles = await Role.findAll({attributes: ["level", "name"]})
  res.json({users, roles})
})

users.post('/add', async (req,res) => {
  const isNewPseudo = await User.findOne({where: {pseudo: req.body.pseudo}});
  const isNewMail = await User.findOne({where: {email: req.body.email}});

  if(isNewPseudo != null || isNewMail != null) {
    res.json({error: true, message: 'User already exists'})
    return false;
  }

  const member = await User.create(req.body)
  res.json(member)
})

users.get('/show/:id', async (req,res) => {
  const user = await User.findOne({where: {id: req.params.id}})
  res.json(user)
})

users.put('/update/:id', async (req,res) => {
  // TODO check if any parts not in use by other user
  // checkDubble(req, res, id)  // request , response, except

  await User.update(req.body, {where: {id: req.params.id}})
    .then(e => {
      res.status(200).json({success: true, message: "User updated with success"})
    })
    .catch(err => {
      res.status(500).json({error: true, err, message: "Error occured ..."})
    })
})

users.delete('/delete/:id', async (req,res) => {
  //TODO
})

module.exports = users