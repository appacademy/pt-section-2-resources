// Instantiate Express and the application - DO NOT MODIFY
const express = require("express");
const app = express();

// Error handling, env variables, and json middleware - DO NOT MODIFY
require("express-async-errors");
require("dotenv").config();
app.use(express.json());

// Import the models used in these routes - DO NOT MODIFY
const { Puppy } = require("./db/models");

// Index of all puppies - DO NOT MODIFY
app.get("/puppies", async (req, res, next) => {
    const allPuppies = await Puppy.findAll({ order: [["name", "ASC"]] });

    res.json(allPuppies);
});

// STEP 1
// Capture the name, ageYrs, breed, weightLbs, and microchipped attributes
// from the body of the request.
// Use these values to BUILD a new Puppy in the database.
// Respond to the request by sending a success message
//! Fun try time
// app.post("/puppies/build", async (req, res, next) => {
//     const { name, ageYrs, weightLbs, breed, microchipped } = req.body;

//     // if (!name) {
//     //     //! Do this for each body value, especially for sensitive data
//     //     return res.json({
//     //         error: "Must supply a name param",
//     //     });
//     // }

//     //? Can do this, but more verbose for no extra functionality
//     // const newPuppy = Puppy.build({ name, ageYrs, weightLbs, breed, microchipped });
//     const newPuppy = Puppy.build(req.body);

//     console.log(newPuppy);

//     try {
//         await newPuppy.validate();
//     } catch (e) {
//         return res.json({
//             error: e.message,
//         });
//     }

//     try {
//         await newPuppy.save();
//     } catch (e) {
//         res.send("second try catch");
//     }

//     return res.json(newPuppy);
// });

//* What we should do
app.post("/puppies/build", async (req, res, next) => {
    const { name, ageYrs, weightLbs, breed } = req.body;

    if (!name) {
        return res.json({
            error: "Must supply a name param",
        });
    }
    if (!ageYrs) {
        return res.json({
            error: "Must supply a ageYrs param",
        });
    }
    if (!weightLbs) {
        return res.json({
            error: "Must supply a weightLbs param",
        });
    }
    if (!breed) {
        return res.json({
            error: "Must supply a breed param",
        });
    }

    const newPuppy = Puppy.build(req.body);

    try {
        // Ensure model and migration BOTH have constraints
        // Then add extra Validations to model
        await newPuppy.validate();
    } catch (e) {
        return res.json({
            error: e.message,
        });
    }

    await newPuppy.save();

    return res.json({
        message: "We finally did it",
        data: newPuppy,
    });
});

// STEP 2
// Capture the name, ageYrs, breed, weightLbs, and microchipped attributes
// from the body of the request.
// Use these values to CREATE a new Puppy in the database.
// Respond to the request by sending a success message
app.post("/puppies/create", async (req, res, next) => {
    const { name, ageYrs, weightLbs, breed } = req.body;

    if (!name) {
        return res.json({
            error: "Must supply a name param",
        });
    }
    if (!ageYrs) {
        return res.json({
            error: "Must supply a ageYrs param",
        });
    }
    if (!weightLbs) {
        return res.json({
            error: "Must supply a weightLbs param",
        });
    }
    if (!breed) {
        return res.json({
            error: "Must supply a breed param",
        });
    }

    try {
        const newPuppy = await Puppy.create(req.body);

        return res.json({
            message: "We finally did it",
            data: newPuppy,
        });
    } catch (e) {
        return res.json({
            error: e.message,
        });
    }
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
    app.listen(port, () => console.log("Server is listening on port", port));
} else {
    module.exports = app;
}
