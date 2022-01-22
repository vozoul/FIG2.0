// imports ...
import axios from 'axios'
import bcrypt from 'bcrypt'
import _ from 'lodash'

export const getToken = () => {
  return "lsdkgjmldkfjqbgkjgfùqd ùfdjgpùfkdjg ùdjfùbkfdsopb";
}

const refreshToken = () => {
  return "sùldfkgmldfkglkfdjwglmkdwgkmljgkmljdqmljgfkmlwjglkdfwj";
}

export const encryptPWD = async (pwd) => {
  return await bcrypt.hash(pwd, 10)
}

const getHeader = () => {
  return {Authorization: 'Bearer ' + getToken() }
}

export const call = async (method, uri, options) => {
  const req = {
    method: method,
    headers: getHeader(),
    url: uri,
    data: options
  }

  return await axios(req)
}

export const authenticated = (user) => {

}

export const authRole = (user) => {

}