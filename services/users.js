const passwordsService = require('./passwords')

const sampleUsers = require('../sample-data/users.json')

function findByCredential(username, password) {
  const user = sampleUsers.find(element => {
    return element.username === username
  })

  if (user === undefined) {
    return null
  }

  if(!passwordsService.compare(password, user.password)) {
    return null
  }

  return user
}

module.exports = {
  findByCredential,
}
