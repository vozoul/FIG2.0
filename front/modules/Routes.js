import express from 'express'
import Basic from './default/default.js'
import Users from './user/index.js'

const Routes = express.Router();

Routes.use('/', Basic)

Routes.use('/users', Users)

export default Routes
// import {homepage} from './default/default.js'

// export {homepage}