const express = require('express');
const router = express.Router();

const { Player } = require('../db/models');

router.get('/', async (req, res) => {
  let { firstName, number, size, page } = req.query;

  const where = {};
  if (firstName && firstName !== '') {
    where.firstName = firstName[0].toUpperCase() + firstName.slice(1);
  } else if (firstName === '') {
    res.status(400);
    return res.json({
      errors: [
        { message: 'firstName filter should not be empty' }
      ]
    });
  }

  if (number) {
    number = parseInt(number)
    if (!isNaN(number) && number >= 0) {
      where.number = number;
    } else {
      res.status(400);
      return res.json({
        errors: [
          { message: 'number filter should be a number greater or equal to 0' }
        ]
      });
    }
  }

  const pagination = {};
  size = parseInt(size);
  page = parseInt(page);
  if (isNaN(page) || page < 0) page = 1;
  if (isNaN(size) || size < 0) size = 2;
  if (size > 10) size = 10;
  pagination.limit = size;
  pagination.offset = size * (page - 1);

  const players = await Player.findAll({
    where,
    ...pagination
  });
  return res.json({
    players,
    page,
    size
  });
});

module.exports = router;
