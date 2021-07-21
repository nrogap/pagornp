const bcrypt = require('bcryptjs')
const { SALT_LENGTH } = require('../config')

function hash(text) {
  console.log(SALT_LENGTH)
  const salt = bcrypt.genSaltSync(SALT_LENGTH)
  return bcrypt.hashSync(text, salt)
}

function compare(text, hash) {
  return bcrypt.compareSync(text, hash)
}

module.exports = {
  hash,
  compare,
}
