const express = require("express");
const router = express.Router();

const { Dog, Breed } = require("../db/models");

router.get("/breeds", async (req, res) => {
  let dogs = await Dog.findAll({
    include: [Breed],
    order: [["petName", "ASC"]],
  });
  res.json(dogs);
});

module.exports = router;
