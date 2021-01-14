
const express = require('express')
const app = express()
const port = 8080
const path = require('path');

app.get('/rebuild', (req, res) => {
  res.send('rebuild!')
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public'))
})

app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})

