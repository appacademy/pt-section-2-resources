

"use strict";

const { Owner } = require("../models");
const {ownerNames} = require("../data")


const NUMBER_OF_OWNERS = ownerNames.length;



module.exports = {
    async up(queryInterface, Sequelize) {


    const owners = [];
    for (let i = 0; i < NUMBER_OF_OWNERS; i++) {
      owners.push({
        name: ownerNames[i]
      });
    }
    await Owner.bulkCreate(owners, { validate: true });


  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete("Owners", null, {});
  },
};
