import express from 'express'
import {config} from 'dotenv'
import morgan from 'morgan'
import db from './services/db.js'
import Routes from './Routes/Routes.js'


const serv = express()
serv.use(express.json())
config()
const port = process.env.PORT || 8090

serv.use(morgan('tiny'))
serv.use(Routes)

db.sync().then(() => {console.log("DB's ready")});



serv.listen(port)