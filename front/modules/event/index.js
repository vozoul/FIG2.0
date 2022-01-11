import express from 'express'
import {all, create, show, subscribe, modify, remove} from './event.mdl.js'

const Events = express.Router()

Users.get('/', all)
Users.post('/', create)
Users.get('/:id', show)
Users.post('/:id', subscribe)
Users.post('/:id', modify)
Users.post('/delete/:id', remove)

export default Events