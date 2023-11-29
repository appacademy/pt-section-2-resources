'use strict';
const {Color} = require("../models")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await Color.bulkCreate([
    {name: "red"},
    {name: "blue"},
    {name: "yellow"}
   ])
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Colors', {
    name: ["red", "blue", "yellow"]
   })
  }
};
