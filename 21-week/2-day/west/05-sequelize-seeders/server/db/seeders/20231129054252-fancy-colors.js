"use strict";
const { Color } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Color.bulkCreate([
      {
        name: "green",
        createdAt: new Date("30 Dec 1990"),
        updatedAt: new Date("30 Dec 1990"),
      },
      {
        name: "pink",
        createdAt: new Date("30 Dec 1990"),
        updatedAt: new Date("30 Dec 1990"),
      },
      {
        name: "orange",
        createdAt: new Date("30 Dec 1990"),
        updatedAt: new Date("30 Dec 1990"),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Colors", {
      name: ["green", "pink", "orange"],
    });
  },
};
