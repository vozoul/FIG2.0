import express from 'express'
import {isAuth} from '../services/auth.js'
import Event from '../models/Basis.mdl.js'
const events = express.Router();

// Get all events
events.get('/', async (req, res) => {
  const events = await Event.findAll()
  res.json(events)
})

events.get('/challengers/:id', async (req,res) => {
  const event = await Event.findOne({where: {id: req.params.id}})
  console.log(event.participants)
  const challengers = event.participants
  res.json(challengers)
})

// Add a user
events.post('/', async (req,res) => {
  const isNewEvent = await Event.findOne({where: {name: req.body.name}});

  if(isNewEvent != null) {
    res.json({error: true, message: 'Event already exists'})
  } else {
    const member = await Event.create(req.body)
    res.json(member)
  }
})

// Add a a subscriber to an event
events.post('/subscribe', async (req,res) => {
  const event = await Event.findOne({where: {id: req.body.id}});
  const newChallenger = req.body.participant
  let challengers = event.participants
  const ncId = (event.participants) ? event.participants.length : 0
  if(challengers == null) {
    await event.update({participants: [{[ncId]: newChallenger}]}, {where: {id: req.body.id}})
  }
  if(challengers != null) {
    await event.update({participants: [...challengers, {[ncId]: newChallenger}]}, {where: {id: req.body.id}})
  }
  res.json(event)
})

// show an event
events.get('/:id', (req,res) => {
  //TODO
})

// Modify profil
events.put('/:id', (req,res) => {
  //TODO
})

// Delete profil
events.delete('/:id', (req,res) => {
  //TODO
})

export default events