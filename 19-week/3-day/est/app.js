// const express = require("express");
// const app = express();
// app.use(express.json());
const app = require("express")();

//! --------------------------------------------------------------------
//*
//! --------------------------------------------------------------------

// const myMiddleware = (req, res, next) => {
//     console.log("I'm a middleware function!");
//     next();
// };

// const mid1 = (req, res, next) => {
//     console.log("Hey I'm mid1!");
//     next();
// };

// const mid2 = (req, res, next) => {
//     console.log("Hey I'm mid2!!");
//     next();
// };

// app.get("/", myMiddleware, mid1, mid2, myMiddleware, mid2, (req, res) => {
//     res.send("Hey");
// });

//! --------------------------------------------------------------------
//*
//! --------------------------------------------------------------------

// const myMid = (req, res, next) => {
//     console.log("Hey look I'm printing!");
//     next();
// };

// app.get("/", myMid);

// app.get("/", (req, res) => {
//     console.log("Wow I printed after myMid!");
//     res.send("This is the / response");
// });

//! --------------------------------------------------------------------
//*
//! --------------------------------------------------------------------

// const myMid = (req, res, next) => {
//     console.log("Hey look I'm printing!");
//     next();
// };

// const missedMid = (req, res, next) => {
//     console.log("I never get to print :(");
//     next();
// };

// app.get("/", myMid);

// app.get("/hello", missedMid);

// app.get("/", (req, res) => {
//     console.log("I still get to print!");
//     res.send("This is the / response");
// });

//! --------------------------------------------------------------------
//*                           Built-In Error example
//! --------------------------------------------------------------------

// app.use((req, res, next) => {
//     throw Error();
// });

app.get("/hello", (req, res, next) => {
    if (req.query.cat === "Momo") {
        res.send("Yay!");
    } else {
        const myMomoError = new Error("That's no momo!");

        // next(myMomoError)
        next();
    }
});

app.use((req, res, next) => {
    console.log("No error's here!");
    res.send("Success");
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500);
    res.send("Whoops! Some error happened I guess?");
});

//! --------------------------------------------------------------------
//*
//! --------------------------------------------------------------------

const port = 5000;
app.listen(port, () => console.log("Middleware so scawwyyy"));
