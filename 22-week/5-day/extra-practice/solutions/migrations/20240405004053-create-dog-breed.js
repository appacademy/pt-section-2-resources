"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("DogBreeds", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      breedId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Breeds",
        },
      },
      dogId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Dogs",
        },
      },
      isACat: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("DogBreeds");
  },
};
