// imports ...
import axios from 'axios'
import bcrypt from 'bcrypt'
import _ from 'lodash'

export const getToken = () => {
  return "lsdkgjmldkfjqbgkjgfùqd ùfdjgpùfkdjg ùdjfùbkfdsopb";
}

const refreshToken = () => {

}

export const encryptPWD = async (inner) => {
  const out = inner
  const {pwd} = inner
  const hashed = await bcrypt.hash(pwd, 10)
  out.pwd = hashed
  return out;
}

const getHeader = () => {
  return {Authorization: 'Bearer ' + getToken() }
}

export const call = async (method, uri, data) => {
  const request = {
    method: method,
    headers: getHeader(),
    url: uri,
    data: data
  }
  const payload = await axios(request)
  return payload
}

export const authenticated = (user) => {}
export const authRole = (user) => {}