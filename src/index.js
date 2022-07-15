const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('project started')
})

app.listen(5000,()=>{
    console.log('listening on port 5000')
})