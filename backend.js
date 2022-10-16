console.log("Hello")

const express = require('express')
const app = express()
      app.use(express.static("public"))
      app.use(express.json())
const port = 3000
const fs = require('fs')

var sites = fs.readFileSync("./sites.json", "utf-8")
var siteObj = JSON.parse(sites)

app.get('/', (req, res) => {

    let data = {
        age: 22,
        name:"Jane"
    }
    res.json(data)
})


app.get('/site-info', (req, res) => {
    res.send(sites)
})

app.get('/add-site', (req, res) => {
    let newSite = {
                    "sites": [
                                {"site_name": "Compiègne",
                                    "product_lines": [{"line_id": "lig_4", "nb_products": "12000000000000000000000000"}]
                                }
                             ]
                  }
    siteObj.sites.push(newSite)
    
    res.send(siteObj)
})

app.post('/post-example', (req, res) => {

    res.send("data received")
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})