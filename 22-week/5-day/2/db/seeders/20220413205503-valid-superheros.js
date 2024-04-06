"use strict";

const { Superhero } = require("../models");

// DON'T SPEND ALL YOUR TIME MAKING REAL SEED DATA!!!
// Try to just spend only 5 minutes to create the seed data for testing
// You do not need to put in real superhero data as values! The data values
// just need to make sense based from the migration and model files.

const validSuperheros = [
    {
        name: "WEFIOJF",
        alias: "aijefoadf",
        affiliation: "Avengers",
        heightCm: 200,
        isMutant: false,
        race: "awefaxcfaef",
        universe: "Marvel",
        releaseYear: 1939,
    },
    {
        name: "WEFIOJFF",
        alias: "aijefoadff",
        affiliation: "Avengers",
        heightCm: 200,
        isMutant: false,
        race: "awefaxcfaef",
        universe: "Marvel",
        releaseYear: 1949,
    },
    {
        name: "WEFIOJFFF",
        alias: "aijefoadfff",
        affiliation: "Avengers",
        heightCm: 200,
        isMutant: false,
        race: "awefaxcfaef",
        universe: "Marvel",
        releaseYear: 1959,
    },
    {
        name: "WEFIOJFFFF",
        alias: "aijefoadffff",
        affiliation: "Avengers",
        heightCm: 200,
        isMutant: false,
        race: "awefaxcfaef",
        universe: "Marvel",
        releaseYear: 1969,
    },
    {
        name: "WEFIOJFFFFF",
        alias: "aijefoadfffff",
        affiliation: "Avengers",
        heightCm: 200,
        isMutant: false,
        race: "awefaxcfaef",
        universe: "Marvel",
        releaseYear: 1979,
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
