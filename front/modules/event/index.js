import express from 'express'
import {all, create, show, subscribe, modify, remove} from './event.mdl.js'

const Events = express.Router()

Events.get('/', all)
Events.post('/', create)
Events.get('/:id', show)
Events.post('/:id', subscribe)
Events.post('/:id', modify)
Events.post('/delete/:id', remove)

export default Events