
const express = require('express')
const app = express()
const port = 8080
const path = require('path');
var exec = require('child_process').exec;

app.get('/rebuild', (req, res) => {
  exec("gatsby build", function(error, stdout, stderr) {
    if (!error) {
      console.log('rebuild');
    } else {
      console.log('failed');
    }
})

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})

