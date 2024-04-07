"use strict";

const { Dog, Breed, Owner } = require("../models");

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await Owner.bulkCreate([{ name: "Will" }, { name: "Kate" }], {
      validate: true,
    });

    await Dog.bulkCreate([{ petName: "Lucky" }, { petName: "Champ" }], {
      validate: true,
    });

    await Breed.bulkCreate([{ breedName: "Golden" }, { breedName: "Poodle" }], {
      validate: true,
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Breeds", null, {});
    await queryInterface.bulkDelete("Dogs", null, {});
    await queryInterface.bulkDelete("Owners", null, {});
  },
};
