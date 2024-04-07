const express = require("express");
const router = express.Router();

const { Owner } = require("../db/models");

router.post("/:ownerName", async (req, res) => {
  // {"dogName": "Fido"}

  let { ownerName } = req.params;

  let owner = await Owner.findOne({ where: { name: ownerName } });

  let { petName } = req.body;

  let newDog = await owner.createDog({ petName: petName });

  res.json(newDog);

  //{"petName": "Fido", "ownerId": 1}
});

module.exports = router;
