const jwt = require("jsonwebtoken")

module.exports = gToken = (user) => {
  return jwt.sign(user, process.env.SECRET_ACCESS_TOKEN, {expiresIn: '600s'})
}

module.exports = rToken = (user) => {
  return jwt.sign(user, process.env.SECRET_REFRESH_TOKEN, {expiresIn: '1d'})
}