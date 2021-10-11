const db = require('./db.json')
const express = require('express')
const app = express()
const port = 3000


function index(req, res) {
  res.send(JSON.stringify(db))
}


function random(req, res) {
  let n = req.params.n
  let list = []
  for(let i=0; i<n; i++) {
    let r = Math.floor(Math.random()*db.length)
    list.push(db[i])
  }
  res.send(list)
}


app.get('/', index)
app.get('/random/:n', random)
app.listen(port, () => console.log(`Beer server running on port ${port}!`))