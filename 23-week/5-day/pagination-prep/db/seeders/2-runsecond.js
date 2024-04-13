"use strict";

const { Pet, Owner } = require("../models");
const {names, images, catArr} = require("../data")


module.exports = {
  async up(queryInterface, Sequelize) {
    const pets = [];
    const createdOwners = await Owner.findAll();

    createdOwners.forEach((owner, index) => {
if (index < 100) {

    pets.push({
        petName: names[index],
        image: catArr[index],
        ownerId: owner.id,
        isCat: true,
    })
} else{
    pets.push({
        petName: names[index],
        image: images[index],
        ownerId: owner.id,
        isCat: false
    })
}
      }
    );

    await Pet.bulkCreate(pets, { validate: true });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Pets", null, {});
  },
};
