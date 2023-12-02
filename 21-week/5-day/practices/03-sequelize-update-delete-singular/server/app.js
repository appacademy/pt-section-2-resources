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
  const { puppyId } = req.params;
  const { ageYrs, weightLbs, microchipped } = req.body;
  // Get a reference to the instance of the Sequelize model to be updated
  const puppyToUpdate = await Puppy.findByPk(puppyId);
  // Assign the attributes that will be changed
  //   if (ageYrs !== undefined) puppyToUpdate.ageYrs = ageYrs;
  //   if (weightLbs !== undefined) puppyToUpdate.weightLbs = weightLbs;
  //   if (microchipped !== undefined) puppyToUpdate.microchipped = microchipped;
  //   // Save the updated instance to the database
  //   await puppyToUpdate.set({ ageYrs, weightLbs, microchipped })
  //   await puppyToUpdate.save();
  await puppyToUpdate.update({ ageYrs, weightLbs, microchipped });
  return res.json({ message: "Success", puppy: puppyToUpdate });
});

// STEP 2: Delete a puppy by id
app.delete("/puppies/:puppyId", async (req, res, next) => {
  const { puppyId } = req.params;
  const puppyToDelete = await Puppy.findByPk(puppyId);
  await puppyToDelete.destroy();
  return res.json({message: "Success", puppy: puppyToDelete});
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
