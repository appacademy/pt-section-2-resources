let express = require("express");
const {
  dbSetUp,
  freshnessCheck,
  seeTablesAndColumns,
  sweetAndSour,
  removeVeggies,
  dogePrices
} = require("./utils/db-utils");
const {
  closeFAQ,
  errMsg,
  cleanRes,
  cleanSchema,
  closeFresh,
  sweetAndSourRes,
  snsFAQ,
  removeVeggiePage,
  dodgePage,
  closeDiv,
  dodgeFAQ
} = require("./utils/htmlConstants");
const { modOneIsClutch } = require("./utils/funkyFuncs");
const path = require("path");

let app = express();
let db = dbSetUp();

app.use(express.static("public"));

app.get("/schema", seeTablesAndColumns, (req, res) => {
  let prettyRes = cleanSchema + modOneIsClutch(req).join("") + closeFAQ;

  res.send(prettyRes);
});

app.get("/ba-na-na-s", freshnessCheck, (req, res) => {
  let prettyRes = cleanRes + req.customBody + closeFresh;

  res.send(prettyRes);
});
app.get("/sweet-n-sour", sweetAndSour, (req, res) => {
    let prettyRes = sweetAndSourRes + req.customBody + closeDiv + snsFAQ;

    res.send(prettyRes);
  });

  app.get("/remove-veggies", removeVeggies, (req, res) => {
    let prettyRes = removeVeggiePage + req.customBody;

    res.send(prettyRes);
  });
  app.get("/doge-to-the-moon", dogePrices, (req, res) => {
    let prettyRes = dodgePage + req.customBody + closeDiv + dodgeFAQ;

    res.send(prettyRes);
  });


app.use((err, req, res, next) => {
  console.log("ERROR:", err);
  res.send(`<h1>${err}</h1> ${errMsg} `);
});

let port = process.env.PORT;
app.listen(port, () =>
  console.log(`Fruit basket server is running on port ${port}...`)
);
