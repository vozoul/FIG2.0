import express from 'express'
import dotenv from 'dotenv'
import Routes from './modules/Routes.js';

dotenv.config()
const app = express();
const port = process.env.PORT || 8080

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
app.use(express.static('assets'))
app.use(Routes)

app.listen(port, () => {
  console.log('server running')
})