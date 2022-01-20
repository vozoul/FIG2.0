const users = require('express').Router();
let User = require('../../models').User;

users.get('/all', async (req, res) => {
  const users = await User.findAll()
  console.log(users)
  res.json(users)
})

users.post('/add', async (req,res) => {
  const isNewPseudo = await User.findOne({where: {pseudo: req.body.pseudo}});
  const isNewMail = await User.findOne({where: {email: req.body.email}});

  if(isNewPseudo != null || isNewMail != null) {
    res.json({error: true, message: 'User already exists'})
  } else {
    const member = await User.create(req.body)
    res.json(member)
  }
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

users.delete('/delete/:id', (req,res) => {
  //TODO
})

module.exports = users