const db = require('./database')
const { compare } = require('./passwords')

async function findByCredential(username, password) {
  const { rows } = await db.query(
    'SELECT * FROM users WHERE username = $1 LIMIT 1',
    [username]
  )

  const user = rows[0]

  if (user === undefined) {
    return null
  }

  if(!compare(password, user.password)) {
    return null
  }

  delete user.password

  return user
}

module.exports = {
  findByCredential,
}
