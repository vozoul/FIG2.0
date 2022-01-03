import express from 'express'
import {home, login, logout, register} from './default.mdl.js'

const Basic = express.Router()

Basic.get('/', home)
Basic.use('/login', login)
Basic.use('/register', register)

// export const home = (req,res) => {
//   // TODO get matches
//   res.render('pages/home', {
//     title: "Accueil"
//     //TODO add matches
//   })
// };

// export const login = (req,res) => {}

// export const register = async (req,res) => {}

// export const logout = async (req,res) => {}

export default Basic