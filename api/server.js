import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'

import db from './services/db.js'
import Routes from './Routes/Routes.js'

const serv = express()
serv.use(express.json())
dotenv.config()
const port = process.env.PORT || 8090

serv.use(morgan('tiny'))
serv.use(Routes)

// db.sync({force:true}).then(() => {});
db.sync().then(() => {})


serv.listen(port, () => {
  console.log(`Server is Ready on port ${port}`)
})