const express = require("express");
const router = express.Router();

const { Player, Fan } = require("../db/models");

router.get("/:fanId/drafts", async (req, res) => {
    const { fanId } = req.params;

    //! Lazy Load
    const theFan = await Fan.findByPk(fanId);
    const players = await theFan.getPlayers();

    // //! Eager Load
    // const players = await Player.findAll({
    //     include: { model: Fan, where: { id: fanId } },
    // });

    return res.json(players);
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    const fanToDelete = await Fan.findByPk(id);

    await fanToDelete.destroy();

    return res.json({ message: "Successfully deleted" });
});

module.exports = router;
