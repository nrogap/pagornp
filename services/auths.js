const jwt = require('jsonwebtoken');

const { JWT_SECRET_KEY } = require('../config')
const { JWT } = require('../constants')

function generateAccessToken(user, role) {
  const payload = {
    code: user.code,
    name: user.name,
    role: role,
  }

  const config = {
    algorithm: JWT.ALGORITHM,
    expiresIn: JWT.EXPIRES_IN
  }

  return jwt.sign(payload, JWT_SECRET_KEY, config)
}

module.exports = {
  generateAccessToken,
}

