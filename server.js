const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/Views'))
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())
// Host the image form here. Render an HTML from here
app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'))
})

// If user uploads a file, then this is the function that gets called
app.post('/upload', (req, res) => {
  // Call a middleware function here on the {req.file} to use the base64 encoded image
  res.send("HELLO WORLD")

})

// Redirects all incorrect endpoints to home
app.get('*', function (req, res) {
  res.redirect('/')
})

// Starts the server at localhost:3000
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('Listening on PORT 3000')
})
