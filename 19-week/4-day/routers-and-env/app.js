const express = require("express");
const usersRouter = require("./routes/users.js");
// require('dotenv').config();
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.use(express.json());

app.use("/users", usersRouter);

if (process.env.NODE_ENV !== "production") {
    app.use((req, res, next) => {
        console.log(req);
        next();
    });
}

app.get("/", (req, res) => {
    return res.send("Hello world");
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));

// Dev (development) - your code that you work with locally
// Testing - Used for running tests to make sure that updates work correctly
// Staging - Replica of the production environment. Used to check things before it goes into production
// Production - For end users
