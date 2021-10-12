const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Welcome')
})

app.get('*', function (req, res) {
  res.redirect('/')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('Listening on PORT 3000')
})
