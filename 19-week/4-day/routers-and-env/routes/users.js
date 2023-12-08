// const router = require('express').Router();

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    return res.send("Hello from users router");
});

router.get("/:userId", (req, res) => {
    return res.send("HEllo from user id router handler");
});

module.exports = router;
