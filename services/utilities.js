const moment = require('moment')

function generateBookCode() {
  return `${moment().format('YYMM-DD')}-${randomString(3)}-${randomString(5)}-${randomOneDigit()}`
}

function generateUserCode() {
  return `U-${randomString(4)}-${randomString(5)}-${randomString(2)}-${randomOneDigit()}`
}

function randomOneDigit() {
  return Math.floor(Math.random() * 10)
}

function randomString(length) {
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  let result = '';
  for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

module.exports = {
  generateBookCode,
  generateUserCode,
}
