const express = require("express");
const router = express.Router();

const { Team, Sport, Player, Match } = require("../db/models");

router.get("/", async (req, res) => {
    const allTeams = await Team.findAll({
        order: ["homeCity", ["name", "DESC"]],
    });

    return res.json(allTeams);
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;

    const teamSportPlayers = await Team.findOne({
        where: { id },
        include: [
            {
                model: Sport,
            },
            {
                model: Player,
                as: "TeamRoster",
            },
        ],
    });

    return res.json(teamSportPlayers);
});

router.get("/:teamId/homeMatchesWon", async (req, res) => {
    const { teamId } = req.params;

    const allHomeWins = await Match.findAll({
        where: {
            homeTeamId: teamId,
            winnerId: teamId,
        },
        include: {
            model: Team,
            as: "AwayTeam",
        },
    });

    return res.json(allHomeWins);
});

router.post("/:id/players", async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, number, isRetired } = req.body;

    const theTeam = await Team.findByPk(id);

    const theNewPlayer = await theTeam.createPlayer({
        firstName,
        lastName,
        number,
        isRetired,
    });

    return res.json(theNewPlayer);
});

module.exports = router;
