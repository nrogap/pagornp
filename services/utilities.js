const moment = require('moment')

function generateBookCode() {
  const code = `${moment().format('YYMM-DD')}-${randomString(3)}-${randomString(5)}-${randomOneDigit()}`
  return code
}

function randomOneDigit() {
  return Math.floor(Math.random() * 10)
}

function randomString(length) {
  return Math.random().toString(26).substring(2, length + 2).toUpperCase()
}

module.exports = {
  generateBookCode,
}
