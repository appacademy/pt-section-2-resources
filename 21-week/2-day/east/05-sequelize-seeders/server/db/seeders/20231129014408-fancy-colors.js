"use strict";
const { Color } = require("../models");
const fancyColors = [
  {
    name: "Midnight Green",
    createdAt: new Date("30 Dec 1992"),
    updatedAt: new Date("30 Dec 1992"),
  },
  {
    name: "Navy blue",
    createdAt: new Date("30 Dec 1992"),
    updatedAt: new Date("30 Dec 1992"),
  },
  {
    name: "Fuchsia",
    createdAt: new Date("30 Dec 1992"),
    updatedAt: new Date("30 Dec 1992"),
  },
  {
    name: "Indigo",
    createdAt: new Date("30 Dec 1992"),
    updatedAt: new Date("30 Dec 1992"),
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Color.bulkCreate(fancyColors);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Colors", {
      name: ["Midnight Green", "Navy blue", "Fuchsia", "Indigo"],
    });
  },
};
