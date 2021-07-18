const express = require('express')

const router = express.Router()

router.get('/signin', function (req, res) {
  res.send('ok')
})

module.exports = router
