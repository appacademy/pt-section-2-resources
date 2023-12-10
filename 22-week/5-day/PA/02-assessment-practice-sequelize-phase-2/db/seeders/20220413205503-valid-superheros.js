"use strict";

const { Superhero } = require("../models");

// DON'T SPEND ALL YOUR TIME MAKING REAL SEED DATA!!!
// Try to just spend only 5 minutes to create the seed data for testing
// You do not need to put in real superhero data as values! The data values
// just need to make sense based from the migration and model files.

const validSuperheros = [
  {
    name: "GREG",
    alias: "Greggy",
    affiliation: "Avengers",
    heightCm: 140,
    race: "human",
    universe: "Marvel",
    releaseYear: 1938
  },
  {
    name: "GREG2",
    alias: "Greggyy",
    affiliation: "Avengers",
    heightCm: 140,
    race: "human",
    universe: "Marvel",
    releaseYear: 1939
  },
  {
    name: "GREG3",
    alias: "Greggyyy",
    affiliation: "Avengers",
    heightCm: 140,
    race: "human",
    universe: "Marvel",
    releaseYear: 1940
  },
  {
    name: "GREG4",
    alias: "Greggyyyy",
    affiliation: "Avengers",
    heightCm: 140,
    race: "human",
    universe: "Marvel",
    releaseYear: 1941
  },
  {
    name: "GREG5",
    alias: "Greggyyyyy",
    affiliation: "Avengers",
    heightCm: 140,
    race: "human",
    universe: "Marvel",
    releaseYear: 1942
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await Superhero.bulkCreate(validSuperheros, {
        validate: true,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  async down(queryInterface, Sequelize) {
    for (let superheroInfo of validSuperheros) {
      try {
        await Superhero.destroy({
          where: superheroInfo,
        });
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  },
  // DO NOT MODIFY BELOW (for testing purposes):
  validSuperheros,
};
