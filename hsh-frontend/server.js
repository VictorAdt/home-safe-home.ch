
const express = require('express')
const app = express()
const port = 8080
const path = require('path');

app.get('/rebuild', (req, res) => {
  res.send('rebuild!')
})

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})

