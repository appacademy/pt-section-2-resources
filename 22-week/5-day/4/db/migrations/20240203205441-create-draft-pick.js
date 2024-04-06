"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("DraftPicks", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            fanId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "Fans",
                    key: "id",
                },
                onDelete: "CASCADE",
            },
            playerId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "Players",
                    key: "id",
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("DraftPicks");
    },
};
