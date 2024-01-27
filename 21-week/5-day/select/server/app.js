// Instantiate Express and the application - DO NOT MODIFY
const express = require("express");
const app = express();

// Import environment variables in order to connect to database - DO NOT MODIFY
require("dotenv").config();

// Import the models used in these routes - DO NOT MODIFY
const { Puppy, Kitty, Turtly } = require("./db/models"); //? Kitty & Turtly don't exist, but they could!

// Import Op to perform comparison operations in WHERE clauses - DO NOT MODIFY
const { Op } = require("sequelize");

// Express using json - DO NOT MODIFY
app.use(express.json());

// STEP 1
// All puppies in the database
// No WHERE clause
app.get("/puppies", async (req, res, next) => {
    const allPuppies = await Puppy.findAll();

    return res.json(allPuppies);
    // console.log(allPuppies[0].dataValues);
    // console.log(allPuppies[0]._previousDataValues);
    // console.log(allPuppies[0].toJSON());
    // console.log("\n\n--\n\n")
    // console.log(allPuppies[0]);
});

// STEP 2
// All puppies that have been microchipped
// WHERE clause with one exact value
app.get("/puppies/chipped", async (req, res, next) => {
    const chippedPuppers = await Puppy.findAll({
        where: {
            microchipped: true,
        },
    });

    return res.json(chippedPuppers);
});

// STEP 3
// One puppy matching a name param
// Finding one record by attribute
app.get("/puppies/name/:name", async (req, res, next) => {
    const { name } = req.params;
    const puppyByName = await Puppy.findOne({
        where: { name },
    });

    if (!puppyByName) {
        return res.json({
            error: `Puppy by the name of ${name} was not found`,
        });
    }

    // const puppyByName = await Puppy.findOne({
    //     where: {
    //         name: req.params.name,
    //     },
    // });

    return res.json(puppyByName);
});

// BONUS STEP 5 - //! NOTE - instructions here are different than README, following README
// All puppies with breed ending in 'Shepherd'
// WHERE clause with a comparison
app.get("/puppies/shepherds", async (req, res, next) => {
    const shepherds = await Puppy.findAll({
        where: {
            breed: {
                [Op.endsWith]: "Shepherd",
            },
        },
        order: [["name", "DESC"]],
    });

    res.json(shepherds);
});

// BONUS STEP 6 - //! NOTE - instructions here are different than README, following README
// All puppies with ageYrs <= 1yr and weightLbs <= 20lbs
// WHERE clause with multiple attributes and comparisons
app.get("/puppies/tinybabies", async (req, res, next) => {
    const tinyBabyPuppies = await Puppy.findAll({
        where: {
            ageYrs: {
                [Op.lt]: 1,
            },
            weightLbs: {
                [Op.lt]: 20,
            },
        },
        // order: ["ageYrs", "weightLbs"],
        order: [["ageYrs"], ["weightLbs"]],
    });

    res.json(tinyBabyPuppies);
});

// STEP 4
// One puppy matching an id param
// Finding one record by primary key
app.get("/puppies/:id", async (req, res, next) => {
    const { id } = req.params;

    //? .findAll - not the greatest
    // const puppyByIdArray = await Puppy.findAll({ where: { id } });
    // const puppyById = puppyByIdArray[0];

    //? .findOne - Okay, but....
    // const puppyById = await Puppy.findOne({ where: { id } });

    //? .findByPk - Our best friend <3
    const puppyById = await Puppy.findByPk(id);

    res.json(puppyById);
});

// Root route - DO NOT MODIFY
app.get("/", (req, res) => {
    res.json({
        message: "API server is running",
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
