const express = require("express");
require("dotenv").config();
const sqlite3 = require("sqlite3");

const app = express();

const db = new sqlite3.Database(
  // File path to url, saved in .env
  process.env.data_source,

  // Give permissions
  sqlite3.OPEN_READWRITE
);

app.get("/", (req, res) => {
    let myDog = "Max"
    // let myDog = req.params.dogName
    // let myDog = "DROP TABLE puppies;"
  let sql = "SELECT * FROM puppies WHERE name = ?;";

//   let sql = `SELECT * FROM puppies WHERE name = ${myDog};`;

  db.all(sql, [myDog], (err, dbData) => {
    //
    console.log("dbData", dbData);
    res.json(dbData);
  });

  // res.send("hello world")
});

let port = 5000;

app.listen(port, () => console.log("listening on port 5000..."));
