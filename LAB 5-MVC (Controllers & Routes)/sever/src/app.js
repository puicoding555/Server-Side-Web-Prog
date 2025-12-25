const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// Middleware to parse JSON request bodies
app.use(express.json());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// เรียก routes.js มาแทนอันเก่า
require('./routes')(app)

app.get('/status', (req, res) => {
  res.send('Coffee Shop API is running')
})

const port = 8081
app.listen(port, () => {
  console.log('Server running on port ' + port)
})
