const express = require("express");
const router = express.Router();

const { Player } = require("../db/models");

router.get("/", async (req, res) => {
  let { firstName, number, page, size } = req.query;

  page = parseInt(page);
  size = parseInt(size);

//   console.log("Pagination checker", page, size);

//   console.log("Checkiing condiotion", Number.isNaN(page) === false);
//   console.log("Checkiing condiotion", Number.isNaN(page));
  if (Number.isNaN(page)) page = 1;
  if (Number.isNaN(size)) size = 2;

  // if num > 10 then max is 10

  if(size > 10) size = 10

  const where = {};
  if (firstName && firstName !== "") {
    where.firstName = firstName[0].toUpperCase() + firstName.slice(1);
  } else if (firstName === "") {
    res.status(400);
    return res.json({
      errors: [{ message: "firstName filter should not be empty" }],
    });
  }

  if (number) {
    if (!isNaN(number) && number >= 0) {
      where.number = parseInt(number);
    } else {
      res.status(400);
      return res.json({
        errors: [
          { message: "number filter should be a number greater or equal to 0" },
        ],
      });
    }
  }

  const players = await Player.findAll({
    where,
    limit: size,
    offset: (page - 1) * size,
  });
//   console.log("did i get here?");
  return res.json({
    players,
    page,
    size,
  });
});

module.exports = router;
