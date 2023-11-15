// Instantiate Express and the application - DO NOT MODIFY
const express = require("express");
const app = express();

// //! Database file - DO NOT MODIFY
// //! DO NOT DO THIS - USE .env VARIABLE INSTEAD
// const DB_FILE = 'app.db';
// const sqlite3 = require("sqlite3");
// const db = new sqlite3.Database(DB_FILE, sqlite3.OPEN_READWRITE);
/**
 * Step 1 - Connect to the database
 */
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database(process.env.db, sqlite3.OPEN_READWRITE);

// Express using json - DO NOT MODIFY
app.use(express.json());

// List of all colors in the database - DO NOT MODIFY
app.get("/colors", (req, res, next) => {
    const sql = "SELECT * FROM colors";
    const params = [];

    db.all(sql, params, (err, rows) => {
        res.json(rows);
    });
});

// db.all("SELECT * FROM puppies", [], (err, rows) => {
//     console.log(err);
//     console.log(rows);
// });

app.post("/puppies/:breed", (req, res, next) => {
    const { breed } = req.params;
    const { name, age, weight, chipped } = req.body;

    const sql = `
    INSERT INTO puppies 
    (name, age_yrs, breed, weight_lbs, microchipped)
    VALUES
    (?, ?, ?, ?, ?);
    `;

    const params = [name, age, breed, weight, chipped];

    db.run(sql, params, (err) => {
        if (err) next(err);
        else {
            const newSql = `SELECT * FROM puppies ORDER BY id DESC LIMIT 1`;

            db.get(newSql, [], (err, row) => {
                if (err) next(err);
                else res.json(row);
            });
        }
    });
});

// // One color by id
// app.get("/colors/:id", (req, res, next) => {
//     /**
//      * STEP 2A - SQL Statement
//      */
//     // Your code here
//     /**
//      * STEP 2B - SQL Parameters
//      */
//     // Your code here
//     /**
//      * STEP 2C - Call database function
//      *  - return response
//      */
//     // Your code here
// });

// // Add color
// app.get("/colors/add/:name", (req, res, next) => {
//     // SQL INSERT
//     const sql = "INSERT INTO colors (name) VALUES (?)";
//     const params = [req.params.name];

//     // SQL QUERY NEW ROW
//     const sqlLast = "SELECT * FROM colors ORDER BY id DESC LIMIT 1";

//     /**
//      * STEP 3 - After INSERT, return the new row
//      *  - insert
//      *  - if error, go to next()
//      *  - if no error, query for new row
//      *  - return new row
//      */
//     // Your code here
// });

// Root route - DO NOT MODIFY
app.get("/", (req, res) => {
    res.json({
        message: "API server is running",
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log(process.env.cool_message, port));
