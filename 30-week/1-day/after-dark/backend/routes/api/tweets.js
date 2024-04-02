const express = require('express');
const { asyncHandler } = require('../../utils');

const router = express.Router();
const db = require('../../db/models');

const { Tweet } = db;

router.get(
    '/',
    asyncHandler(async (req, res) => {
        const tweets = await Tweet.findAll();
        res.json(tweets);
    })
);

router.post(
    '/',
    asyncHandler(async (req, res) => {
        // const { message } = req.body;
        // const data = await Tweet.create({ message });

        const newTweet = await Tweet.create(req.body);

        res.json(newTweet);
    })
);

module.exports = router;
