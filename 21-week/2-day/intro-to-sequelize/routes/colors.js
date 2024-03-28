const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const path = require("path");
const express = require("express");
require("dotenv").config();

const colorRouter = express.Router();

const Color = require("../models/colors")



colorRouter.get("/", (req, res) => {
  // console.log("COLOR: ", Color)

  let sql = Color.getAll()

  const params = [];
  db.all(sql, params, (err, rows) => {
    res.json(rows);
  });
});



colorRouter.get("/:id", (req, res) => {
  // let {id} = req.params
  let id = req.params.id
// let reqBody = req.body
// console.log("reqBody", reqBody)
let sql = Color.getById(id)

  const params = [];
  db.all(sql, params, (err, rows) => {
    res.json(rows);
  });
});


module.exports = colorRouter;
