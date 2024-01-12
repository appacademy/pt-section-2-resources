const express = require("express");

const aiRouter = express.Router();

aiRouter.get("/", (req, res) => {
    res.json({
        message: "I'm totally not a robot and definitely a real human",
    });
});

module.exports = aiRouter;
