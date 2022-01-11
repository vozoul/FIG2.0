import bodyParser from 'body-parser'
import { call } from '../../services/global.js'
import { needles, apiURL} from '../../services/config.js'


export const all = async (req,res) => {
  const uri = apiURL + '/events'
  const response = await call('GET', uri)
  res.render('pages/events', {
    title: "Évènements",
    data: response.data
  })
}

export const create = (req,res) => {}
export const show = (req,res) => {}
export const subscribe = (req,res) => {}
export const modify = (req,res) => {}
export const remove = (req,res) => {}