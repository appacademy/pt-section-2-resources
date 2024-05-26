"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Tweets",
			[
				{
					userId: 1,
					replyId: null,
					body: "This is my first tweet!!!",
				},
				{
					userId: 2,
					replyId: 1,
					body: "Me too!!",
				},
				{
					userId: 1,
					replyId: null,
					body: "How does this thing even work??",
				},
				{
					userId: 3,
					replyId: null,
					body: "Low key this is awesome",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Tweets", null, {});
	},
};
