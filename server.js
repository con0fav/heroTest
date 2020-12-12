const express = require('express')
const app = express()

var PORT = process.env.PORT || 3001;
 
// basic route
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(PORT)