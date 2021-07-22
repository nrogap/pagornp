const express = require('express')

const config = require('./config')
const users = require('./routes/users')
const books = require('./routes/books')

const app = express()

app.use(express.json())

app.use('/api/users', users)
app.use('/api/books', books)

app.get('/api/health', (req, res) => {
  res.send('Hey, What’s up?')
})

app.listen(config.PORT, () => {
  console.log(`App listening at http://localhost:${config.PORT}`)
})
