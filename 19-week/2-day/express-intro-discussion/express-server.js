const express = require("express");

const app = express();

app.use(express.json());

app.get("/games/:gameId", (req, res) => {
    const { gameId } = req.params;

    return res.send("Hello World");
});

app.post("/games", (req, res) => {
    const { name, releaseYear, description } = req.body;
});

const port = 8000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));
