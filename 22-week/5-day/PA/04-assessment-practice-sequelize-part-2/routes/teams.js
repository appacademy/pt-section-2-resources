const express = require("express");
const router = express.Router();

const { Team, Player, Sport, Match } = require("../db/models");

router.post("/:id/players", async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, number, isRetired } = req.body;
  const newPlayer = await Player.create({
    firstName,
    lastName,
    number,
    isRetired,
    currentTeamId: parseInt(id),
  });
  return res.json(newPlayer)
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const team = await Team.findByPk(id, {
        include: [{model: Sport}, {model: Player, as: "TeamRoster"}]
    });
    return res.json(team)
});

router.get("/", async (req, res) => {
  const teams = await Team.findAll({
    order: ["homeCity", ["name", "DESC"]]
  });
  return res.json(teams)
});

router.get("/:teamId/homeMatchesWon", async (req, res) => {
  const {teamId} = req.params;
  const team = await Team.findByPk(teamId, {
    include: [{
      model: Match,
      as: "homeMatches",
      where: {winnerId: parseInt(teamId)}
    }]
  });
  return res.json(team.homeMatches)
})

module.exports = router;
