const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// const db = require('./services/db.js');
// const Routes = require('./OLD/Routes/Routes.js');

const serv = express()
serv.use(express.json())
dotenv.config()
const port = process.env.PORT || 8090

serv.use(morgan('tiny'))
// serv.use(Routes)

// db.sync({force:true}).then(() => {});
// db.sync().then(() => {})

serv.listen(port, () => {
  console.log(`Server is Ready on port ${port}`)
})