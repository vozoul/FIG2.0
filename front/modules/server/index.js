import express from 'express'
import {showAll, addOne, modify, remove} from './server.mdl.js'

const Servers = express.Router()

Servers.get('/', showAll)
Servers.post('/', addOne)
Servers.post('/:id', modify)
Servers.post('/delete/:id', remove)

export default Servers