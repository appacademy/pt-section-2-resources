'use strict';
const {Color} = require("../models")
const primaryColors = [{name: 'red'}, {name: 'blue'}, {name: 'yellow'}]

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up (queryInterface, Sequelize) {
    await Color.bulkCreate(primaryColors)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Colors", {
      name: ['red', 'blue', 'yellow']
    })
  }
};
