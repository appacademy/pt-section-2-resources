"use strict";
const { DogBreed } = require("../../db/models");
module.exports = {
  async up(queryInterface, Sequelize) {
    await DogBreed.bulkCreate(
      [
        { dogId: 1, breedId: 1 },
        { dogId: 1, breedId: 2 },
      ],
      {
        validate: true,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("DogBreeds", null, {});
  },
};
