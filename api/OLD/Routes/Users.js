const users = require('express').Router();
const { Op } = require('sequelize');
const User = require('../../models').User;
const Role = require('../../models').Role;
const cfg = require('../../config/team.json')



users.post('/login', async (req, res) => {
  console.log(req.body)
  const data = await User.findOne({
    attributes: ["id", "pseudo", "avatar", "steamId", "role"] ,
    where: {pseudo: req.body.pseudo}
  })
  console.log(data)
  res.json(data)
})

users.get('/all', async (req, res) => {
  lowestMember = cfg.minMember
  let min = await Role.findOne({where: {name: lowestMember}})
  const users = await User.findAll({
    attributes: ["id", "pseudo", "avatar", "steamId", "role"] ,
    where: {role: {[Op.gt]: (min -1)}}
  })
  res.json(users)
})

users.post('/add', async (req,res) => {
  const isNewPseudo = await User.findOne({where: {pseudo: req.body.pseudo}});
  const isNewMail = await User.findOne({where: {email: req.body.email}});

  if(isNewPseudo != null || isNewMail != null) {
    return res.json({error: true, message: 'User already exists'})
  }

  const user = await User.create(req.body)
  return res.json({success: true, message: "user added to database"})
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