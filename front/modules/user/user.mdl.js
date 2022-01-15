import bodyParser from 'body-parser'
import { call } from '../../services/global.js'
import { needles, apiURL} from '../../services/config.js'


export const allUser = async (req,res) => {
  // const uri = apiURL + '/users'
  // const response = await call('GET', uri)
  // console.log(response)
  res.render('pages/membres', {
    title: "Membres",
    // data: response.data
  })
}

export const addOne = (req,res) => {}
export const profil = (req,res) => {}
export const getOne = (req,res) => {}
export const modify = (req,res) => {}
export const remove = (req,res) => {}