const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const path = require("path");
const express = require("express");
require("dotenv").config();

const colorRouter = express.Router();



const Color = require("../db/models/colors")



colorRouter.get("/", (req, res, next) => {
  res.send("in route")

  // const params = [];
  // db.all(sql, params, (err, rows) => {
  //   res.json(rows);
  // });
});

module.exports = colorRouter;
