const express = require("express");
const colorRouter = express.Router();

const DB_FILE = process.env.DB_FILE;
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database(DB_FILE, sqlite3.OPEN_READWRITE);

const Colors = require("../models/colors");

colorRouter.get("/", (req, res, next) => {
    const sql = Colors.getAll();
    const params = [];

    db.all(sql, params, (err, rows) => {
        res.json(rows);
    });
});

// One color by id
colorRouter.get("/:id", (req, res, next) => {
    const { id } = req.params;
    const sql = Colors.getById(id);

    db.get(sql, [], (errIfBroken, dataIfSuccess) => {
        res.json(dataIfSuccess);
    });
});

// Complex get
colorRouter.post("/conditions", (req, res, next) => {
    //! Takes lots of time and lines
    // const where = req.body.where;
    // const order = req.body.order;
    // // ...5 hours later
    // const offset = req.body.offset;

    //? Faster, cleaner, more common in the real world
    // const { where, order, values, limit, offset } = req.body;
    // const sql = Colors.getWithConditions({ where, order, values });

    const sql = Colors.getWithConditions(req.body);

    db.all(sql, [], (errIfBroken, dataIfSuccess) => {
        res.json(dataIfSuccess);
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
