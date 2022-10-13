console.log("Hello")

const express = require('express')
const app = express()
const port = 3000

const fs = require('fs')


app.get('/', (req, res) => {

    let data = {
        age: 22,
        name:"Jane"
    }
    res.json(data)
})


app.get('/site-info', (req, res) => {

    fs.readFile(/sites.json)
    res.json(data)
})


app.post('/post-example', (req, res) => {

    res.send("data received")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})