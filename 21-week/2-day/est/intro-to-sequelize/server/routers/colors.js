const DB_FILE = process.env.DB_FILE;
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database(DB_FILE, sqlite3.OPEN_READWRITE);
const express = require("express");
const colorRouter = express.Router();
const Color = require("../models/colors");

// List of all colors in the database - DO NOT MODIFY
colorRouter.get("/", (req, res, next) => {
    const sql = Color.getAll();
    const params = [];

    db.all(sql, params, (err, rows) => {
        res.json(rows);
    });
});

// One color by id
colorRouter.get("/:id", (req, res, next) => {
    const { id } = req.params;

    const sql = Color.getById(id);

    db.get(sql, [], (errIfBreaks, dataIfSuccess) => {
        if (errIfBreaks) {
            return res.status(500).json({
                error: errIfBreaks.code,
                sorry: "Whoops!",
            });
        } else {
            res.json(dataIfSuccess);
        }
    });
});

// One color by id
colorRouter.post("/conditions", (req, res, next) => {
    // const { where, orderBy, values } = req.body;

    const sql = Color.getWithConditions(req.body);

    db.all(sql, [], (errIfBreaks, dataIfSuccess) => {
        if (errIfBreaks) {
            console.log(errIfBreaks);
            return res.status(500).json({
                error: errIfBreaks.code,
                sorry: "Whoops!",
            });
        } else {
            res.json(dataIfSuccess);
        }
    });
});

// Add color
colorRouter.post("/add/:name", (req, res, next) => {
    // SQL INSERT
    const sql = "INSERT INTO colors (name) VALUES (?)";
    const params = [req.params.name];

    // SQL QUERY NEW ROW
    const sqlLast = "SELECT * FROM colors ORDER BY id DESC LIMIT 1";

    /**
     * STEP 3 - After INSERT, return the new row
     *  - insert
     *  - if error, go to next()
     *  - if no error, query for new row
     *  - return new row
     */
    // Your code here
});

module.exports = colorRouter;
