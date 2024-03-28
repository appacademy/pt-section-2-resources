"use strict";

const { Color } = require("../models");

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //! DOES NOT respect Model validations
    // Does not Model validations -- this
    await queryInterface.bulkInsert("Colors", [
      { name: "red" },
      { name: "blue" },
      { name: "yellow" },
      { name: "greeny" },
    ]);


    //INSERT INTO Colors (name) VALUES ('red');
    // -- Second statement
    // INSERT INTO Colors (name) VALUES ('red');
    // -- Third statement
    // INSERT INTO Colors (name) VALUES (NULL);
    // -- Fourth statement
    // INSERT INTO Colors (name) VALUES ('a');
    // -- Fifth statement
    // INSERT INTO Colors (name) VALUES ('orangey');
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // Does respect Model validations!
    await Color.bulkCreate(
        [
            { name: "red" },
            { name: "blue" },
            { name: "yellow" },
            // { name: "greeny" },
        ],
        { validate: true }
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Colors", {
      name: ["red", "blue", "yellow", "greeny"],
    });
  },
};
