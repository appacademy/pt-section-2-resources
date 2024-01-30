// Instantiate Express and the application - DO NOT MODIFY
const express = require("express");
const app = express();

// Import environment variables in order to connect to database - DO NOT MODIFY
require("dotenv").config();
require("express-async-errors");

// Import the models used in these routes - DO NOT MODIFY
const {
    Band,
    Musician,
    Instrument,
    MusicianInstrument,
} = require("./db/models");

// Express using json - DO NOT MODIFY
app.use(express.json());

// STEP 1: Creating from an associated model (One-to-Many)
app.post("/bands/:bandId/musicians", async (req, res, next) => {
    const { bandId } = req.params;
    const { firstName, lastName } = req.body;

    //? Feel free to error handle

    // * Cool new way with associated models
    const band = await Band.findByPk(Number(bandId));

    const newMusician = await band.createMusician({ firstName, lastName });

    return res.json({
        message: `Created new musician for band ${band.name}.`,
        musician: newMusician,
    });

    // //! Old way without Sequelize associations created
    // const band = await Band.findByPk(Number(bandId));

    // const newMusician = await Musician.create({
    //     firstName,
    //     lastName,
    //     bandId: band.id,
    // });

    // return res.json({
    //     whatever: "a9wiejfawefa",
    //     data: newMusician,
    // });
});

// // STEP 2: Connecting two existing records (Many-to-Many)
// app.post("/musicians/:musicianId/instruments", async (req, res, next) => {
//     const { musicianId } = req.params;
//     const { instrumentIds } = req.body;

//     const lessMusicianInstruments = await MusicianInstrument.findAll();

//     console.log(
//         "\n\nBEFORE\n\n",
//         JSON.parse(JSON.stringify(lessMusicianInstruments)),
//         "\n\nBEFORE\n\n"
//     );

//     console.log(
//         "---------------------------------------------------------------------------------------------------------------"
//     );

//     console.log("\n\nmusicianId\n\n", musicianId, "\n\nmusicianId\n\n");

//     console.log(
//         "\n\nInstrumentIds\n\n",
//         instrumentIds,
//         "\n\nInstrumentIds\n\n"
//     );

//     console.log(
//         "--------------------------------------Entering the for loop-------------------------------------------------------------------------"
//     );

//     //? Error check here to ensure everything exists
//     for (const id of instrumentIds) {
//         const currentInstrument = await Instrument.findByPk(id);

//         console.log(currentInstrument.toJSON());
//     }

//     console.log(
//         "--------------------------------------------After the for loop-------------------------------------------------------------------"
//     );

//     const musician = await Musician.findByPk(Number(musicianId));

//     console.log(
//         "\n\nThe musician\n\n",
//         musician.toJSON(),
//         "\n\nThe musician\n\n"
//     );

//     await musician.addInstruments(instrumentIds);

//     console.log(
//         "--------------------------------------------After we associate the instruments-------------------------------------------------------------------"
//     );

//     const allMusicianInstruments = await MusicianInstrument.findAll();

//     console.log(
//         "\n\nAFTER\n\n",
//         JSON.parse(JSON.stringify(allMusicianInstruments)),
//         "\n\nAFTER\n\n"
//     );

//     return res.json({
//         message: `Associated ${musician.firstName} with instruments ${instrumentIds}.`,
//     });
// });

// STEP 2: Connecting two existing records (Many-to-Many)
app.post("/musicians/:musicianId/instruments", async (req, res, next) => {
    const { musicianId } = req.params;
    const { instrumentIds } = req.body;

    const musician = await Musician.findByPk(Number(musicianId));

    await musician.addInstruments(instrumentIds);

    return res.json({
        message: `Associated ${musician.firstName} with instruments ${instrumentIds}.`,
    });
});

// how I would do that
app.post("/musicians/:musicianId/instruments", async (req, res, next) => {
    const { musicianId } = req.params;
    const { musicianIdAgain } = req.body;

    if (Number(musicianId) !== Number(musicianIdAgain)) throw new Error("Bad!");
});

// Get the details of one band and associated musicians - DO NOT MODIFY
app.get("/bands/:bandId", async (req, res, next) => {
    const payload = await Band.findByPk(req.params.bandId, {
        include: { model: Musician },
        order: [[Musician, "firstName"]],
    });
    res.json(payload);
});

// Get the details all bands and associated musicians - DO NOT MODIFY
app.get("/bands", async (req, res, next) => {
    const payload = await Band.findAll({
        include: { model: Musician },
        order: [["name"], [Musician, "firstName"]],
    });
    res.json(payload);
});

// Get the details of one musician and associated instruments - DO NOT MODIFY
app.get("/musicians/:musicianId", async (req, res, next) => {
    const payload = await Musician.findByPk(req.params.musicianId, {
        include: { model: Instrument },
        order: [[Instrument, "type"]],
    });
    res.json(payload);
});

// Get the details all musicians and associated instruments - DO NOT MODIFY
app.get("/musicians", async (req, res, next) => {
    const payload = await Musician.findAll({
        include: { model: Instrument },
        order: [["firstName"], ["lastName"], [Instrument, "type"]],
    });
    res.json(payload);
});

// Root route - DO NOT MODIFY
app.get("/", (req, res) => {
    res.json({
        message: "API server is running",
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
if (require.main === module) {
    const port = 8000;
    app.listen(port, () =>
        console.log("Server for Associations is listening on port", port)
    );
} else {
    module.exports = app;
}
