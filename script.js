const express = require('express')
const app = express()
const port = 3000

// middleware
app.use(function(req, res, next) {
    next()
})

// ejs
app.set('view engine', 'ejs')
app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cart', (req, res) => {
  res.render('index')
})

// Dynamic Routing
app.get('/profile/:username', (req, res) => {
  res.send(`My name is ${req.params.username}`)
})
app.get('/error', (req, res, next) => {
  throw Error('Something went wrong with this page')
})

app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})