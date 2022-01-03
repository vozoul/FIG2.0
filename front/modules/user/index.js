import express from 'express'
import {allUser, addOne, getOne,modify,remove} from './user.mdl.js'

const Users = express.Router()

Users.get('/', allUser)
Users.post('/', addOne)
Users.get('/:id', getOne)
Users.post('/:id', modify)
Users.post('/delete/:id', remove)

export default Users