const sampleUsers = require('../sample-data/users.json')

function findByCredential(username, password) {
  const user = sampleUsers.find(element => {
    return element.username === username && element.password === password
  })

  if (user === undefined) {
    return null
  }

  return user
}

module.exports = {
  findByCredential,
}
