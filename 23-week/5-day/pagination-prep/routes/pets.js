const express = require("express");
const { route } = require("express/lib/router");
const router = express.Router();

let { Pet } = require("../db/models");

router.get("/", async (req, res) => {

let {page, size} = req.query

console.log("page size", page, size)

page = parseInt(page)
size = parseInt(page)

let pets = await Pet.findAll({
    limit: size,
    offset: (page - 1) * size
})

res.json({"Pets": pets})

});

module.exports = router;
