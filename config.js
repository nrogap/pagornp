require('dotenv').config({ path: `${__dirname}/.env` })

const config = {
  PORT: process.env.PORT,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
}

module.exports = config
