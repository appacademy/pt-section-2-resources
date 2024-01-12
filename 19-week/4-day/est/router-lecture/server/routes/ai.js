const express = require("express");
const aiRouter = express.Router();

aiRouter.get("/chatbot", (req, res) => {
    res.send("I'm totally a person and not an AI");
});

aiRouter.post("/new", (req, res) => {
    console.log(req.body);

    res.send("I'm totally a person and not an AI");
});

module.exports = aiRouter;
