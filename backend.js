// La console vous dit bonjour
console.log("Hello");

// Adding the express library and setting app usage
const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.json());

// Adding the fs library
const fs = require("fs");

// port listening
const port = 3000;

// Read sites.json and put the content in a global object variable
let sitesPath = "./sites.json";
let sites = fs.readFileSync(sitesPath, "utf-8");
var siteObj = JSON.parse(sites);

// main route
app.get("/", (req, res) => {
  let data = {
    age: 22,
    name: "Jane",
  };
  res.json(data);
});

// Route to display content of sites.json
app.get("/site-info", (req, res) => {
  res.send(sites);
});

// Route to add a production line for Compiègne site
// /!\ writes sites.json
app.get("/add-production-line", (req, res) => {
  let newSite = {
    sites: [
      {
        site_name: "Compiègne",
        product_lines: [
          { line_id: "COMP_lig_4", nb_products: "12000000000000000000000000" },
        ],
      },
    ],
  };
  siteObj.sites.push(newSite);
  fs.writeFileSync(sitesPath, JSON.stringify(siteObj));
  console.log("A production line has been added to Compiègne site");
  res.send(siteObj);
});

app.post("/post-example", (req, res) => {
  res.send("data received");
});

app.get("/update-production-line/:lineID", (req, res) => {
  let requested_update = req.query;

  let newValue = requested_update.nb_products;
  console.log(newValue);

  console.log(requested_update.keys);

  res.send("Ok");
});

// Now listen on port defined by the 'port' const
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
