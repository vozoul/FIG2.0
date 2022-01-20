const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const Routes = require('./OLD/Routes/Routes.js');

const serv = express()
serv.use(express.json())
dotenv.config()
const port = process.env.PORT || 8090

serv.use(morgan('tiny'))
serv.use(Routes)

serv.listen(port, () => {
  console.log(`Server is Ready on port ${port}`)
})