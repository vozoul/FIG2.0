import express from 'express'
import {showAll, addOne, getOne, profil, modify, remove} from './server.mdl.js'

const Servers = express.Router()

Servers.get('/', showAll)
Servers.post('/', addOne)
Servers.get('/profil', profil)
Servers.get('/:id', getOne)
Servers.post('/:id', modify)
Servers.post('/delete/:id', remove)

export default Servers