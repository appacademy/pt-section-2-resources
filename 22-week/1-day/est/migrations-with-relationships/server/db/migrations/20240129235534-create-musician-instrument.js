'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MusicianInstruments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      musicianId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "Musicians",
            key: "id"
        }
      },
      instrumentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "Instruments",
            key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MusicianInstruments');
  }
};