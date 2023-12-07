const express = require("express");
const users = require("./data.js");

const app = express();

app.use(express.json());

// 1. Middleware that exists outside routers
app.use("/stuff", (req, res, next) => {
    console.log("Hello from outer middleware");
    next();
});
// 2. Middleware that exists inside routers
const middlewareFunc = (req, res, next) => {
    console.log("Hello from inner middleware");
    next();
};

app.get("/users/:userId", middlewareFunc, (req, res, next) => {
    const { userId } = req.params;

    if (users[userId]) {
        return res.json(users[userId]);
    }

    const err = new Error("User not found!");
    err.statusCode = 404;
    next(err);
});

app.use((req, res, next) => {
    console.log("Hey you won't see this log");
    next();
});

// 3. Error handling middleware
app.use((err, req, res, next) => {
    // res.statusCode = 404;
    res.status(404);

    return res.json({
        status: err.statusCode,
        message: err.message,
    });
});

const port = 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
