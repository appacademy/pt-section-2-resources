const express = require("express");
const users = require("./data.js");

const app = express();

app.get("/users/:userId", (req, res) => {
    const { userId } = req.params;

    if (users[userId]) {
        return res.json(users[userId]);
    }
});

const port = 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
