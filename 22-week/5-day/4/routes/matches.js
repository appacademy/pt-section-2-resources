const express = require("express");
const router = express.Router();

const { Match, Team } = require("../db/models");

router.get("/:id", async (req, res) => {
    const { id } = req.params;

    const theMatch = await Match.findOne({
        where: { id },
        include: [
            {
                model: Team,
                as: "HomeTeam",
            },
            {
                model: Team,
                as: "AwayTeam",
            },
            {
                model: Team,
                as: "Winner",
            },
        ],
    });

    return res.json(theMatch);
});

module.exports = router;
