// const express = require("express");
// const app = express();
// app.use(express.json())
const app = require("express")();

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

// app.use(
//     (req, res, next) => {
//         console.log("Fluffy girl");

//         next();
//     },
//     mid2,
//     (req, res, next) => {
//         console.log("nameless func");
//         next();
//     }
// );

// app.get("/", myMiddleware, mid1, mid2, myMiddleware, mid2, (req, res) => {
//     console.log("route handler!");

//     res.send("Kiki is the best");
// });

//! --------------------------------------------------------------------
//*                         Error Handling Middleware
//! --------------------------------------------------------------------

// app.get("/hi", (req, res) => {
//     res.send("Hi there!");
// });

// // This is throwing the error (notice no 'err' parameter)
// // app.use((req, res, next) => {
// //     throw new Error("We didn't find that resource");
// // });

// app.use((req, res, next) => {
//     // const myCustomError = new Error("We didn't find that resource");
//     // next(myCustomError)

//     next("I'm literally not an error");
// });

// app.use((err, req, res, next) => {
//     console.log("WAAAAAA");
//     console.log(err);
//     res.status(err.status || 500);
//     res.send("Whoops! Some error happened I guess?");
// });

//! --------------------------------------------------------------------
//*                        Passing random ish to next
//! --------------------------------------------------------------------

//% #5
const myMiddleware = (req, res, next) => {
    console.log("I'm a middleware function!");
    next("This can be anything, especially an error"); // Senpai notices
    // next(); // DNE
};

//% #1
app.use((req, res, next) => {
    throw new Error("Yooooo it's bad!");
});

//! #2
app.use((err, req, res, next) => {
    console.log("In the error handler");

    next();
});

//% #3
app.use((req, res, next) => {
    console.log("We're in the second normal middleware");

    next();
});

//% #4
app.use(myMiddleware, (err, req, res, next) => {
    //! #6
    console.log("THIS IS THE ERROR =>", err);
    console.log("No one notices me :("); // Gets noticed if the previous function was next("with anything")
    // console.log(err); // this is a function

    // err(req, res, next);

    next();
});

//% #7 final
app.use((req, res, next) => {
    res.send("We reached the end!");
});

const port = 5000;
app.listen(port, () => console.log("Middleware so scawwyyy"));
