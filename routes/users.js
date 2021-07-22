const express = require('express')

const { findByCredential } = require('../services/users')
const { generateAccessToken } = require('../services/auths')

const router = express.Router()

router.post('/signin', async function (req, res) {
  const { username, password } = req.body
  const user = await findByCredential(username, password)

  if (user === null) {
    return res.sendStatus(403)
  }

  user.token = generateAccessToken(user)

  res.json(user)
})

module.exports = router
