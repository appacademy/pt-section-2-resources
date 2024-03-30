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

// STEP 1: Update a puppy by id
app.put("/puppies/:puppyId", async (req, res, next) => {
  // Your code here
  let { puppyId } = req.params;
  let updatedPuppy = await Puppy.findByPk(puppyId);
  // console.log(updatedPuppy)
  let { ageYrs, weightLbs, microchipped } = req.body;

  if (ageYrs) {
    updatedPuppy.ageYrs = ageYrs;
  }
  if (weightLbs) {
    updatedPuppy.weightLbs = weightLbs;
  }
  if (microchipped) {
    updatedPuppy.microchipped = microchipped;
  }
// updatedPuppy.set({
//     ageYrs: ageYrs,
//     weightLbs: weightLbs,
//     microchipped: microchipped
// })
//   console.log("updated puppy", updatedPuppy);
  await updatedPuppy.save()

  res.json({ yourUpdates: updatedPuppy });
});

// STEP 2: Delete a puppy by id
app.delete("/puppies/:puppyId", async (req, res, next) => {
  // Your code here
  let { puppyId } = req.params;
  let puppyToDelete = await Puppy.findByPk(puppyId);
  await puppyToDelete.destroy()
  res.json({message: "Puppy is deleted"})
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
