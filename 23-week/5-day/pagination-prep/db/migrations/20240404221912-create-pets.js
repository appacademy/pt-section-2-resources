"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Pets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      petName: {
        type: Sequelize.STRING,
      },
      ownerId: {
          type: Sequelize.INTEGER,
          references: { model: "Owners" },
          onDelete: 'CASCADE',
        },
        image:{
            type: Sequelize.STRING
        },
        isCat: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
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
    await queryInterface.dropTable("Pets");
  },
};
