const express = require('express');

const peopleRouter = express.Router();

// /people

peopleRouter.get("/", (req, res) => {
  res.json("Number 1");
});

peopleRouter.post("/:personId/likes", (req, res) => {
  res.json("Number 2");
});

peopleRouter.delete("/:personId", (req, res) => {
  res.json("Number 3");
});

peopleRouter.get("/best-dressed/comments", (req, res) => {
  res.json("Number 4");
});

peopleRouter.get("/people/:name/lookup", (req, res) => {
  res.json("Number 5");
});

module.exports = peopleRouter;