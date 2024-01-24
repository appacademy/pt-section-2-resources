const express = require("express");
const app = express();


const DB_FILE = process.env.DB_FILE;
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database(DB_FILE, sqlite3.OPEN_READWRITE);

const colorRouter = require("./routers/colors");

app.use(express.json());

app.use("/colors", colorRouter);

app.get("/", (req, res) => {
    res.send("We at home babyy");
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
