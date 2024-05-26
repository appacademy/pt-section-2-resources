const express = require("express");
const { Tweet, User } = require("../../db/models");
const router = express.Router();

router.get("/", async (req, res) => {
	const allTweets = await Tweet.findAll({
		include: [
			{
				model: Tweet,
				required: false,
				include: { model: User },
				order: [["createdAt", "ASC"]],
			},
			{ model: User },
		],
		order: [["createdAt", "ASC"]],
	});
	res.json(allTweets);
});

module.exports = router;
