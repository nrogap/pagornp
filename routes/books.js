const express = require('express')

const sampleBooks = require('../sample-data/books.json')

const router = express.Router()

router.get('/', function (req, res) {
  res.json(sampleBooks)
})

router.get('/:code', function (req, res) {
  const code = req.params.code
  const book = sampleBooks.find(element => element.code === code);

  if (book === undefined) {
    return res.sendStatus(404)
  }

  res.json(book)
})

module.exports = router