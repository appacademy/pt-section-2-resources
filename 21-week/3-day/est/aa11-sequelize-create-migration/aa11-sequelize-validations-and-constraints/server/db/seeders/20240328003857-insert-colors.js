"use strict";

const { Color } = require("../models");

module.exports = {
  async up(queryInterface, Sequelize) {



    // await queryInterface.bulkInsert("Colors", [
    //   { name: "red" },
    //   { name: "blue" },
    //   { name: "yellow" },
    //   { name: "greeny" },
    // ]);

    // Does respect Model validations!
    await Color.bulkCreate(
        [
            { name: "red" },
            { name: "blue" },
            { name: "yellow" },
            { name: "greeny" },
        ],
        { validate: true }
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Colors", {
      name: ["red", "blue", "yellow", "greeny"],
    });
  },
};
