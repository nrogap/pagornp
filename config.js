require('dotenv').config({ path: `${__dirname}/.env` })

const config = {
  PORT: process.env.PORT,
}

module.exports = config
