const express = require("express");

const router = express.Router();

// /people

router.get("/", (req, res) => {
    res.json("Number 1");
});

router.get("/:name/*/*/*", (req, res) => {
    res.json({

        name: req.params.name,
    });
});

router.post("/:personId/likes", (req, res) => {
    console.log(req.body);
    res.json("Number 2");
});

router.delete("/:personId", (req, res) => {
    res.json("Number 3");
});

router.get("/best-dressed/comments", (req, res) => {
    res.json("Number 4");
});

router.get("/people/:name/lookup", (req, res) => {
    res.json("Number 5");
});

module.exports = router;
