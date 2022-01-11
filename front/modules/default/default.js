import express from 'express'
import {home, login, logout, register, contact} from './default.mdl.js'

const Basic = express.Router()

Basic.get('/', home)
Basic.use('/login', login)
Basic.use('/register', register)
Basic.use('/contact', contact)

export default Basic