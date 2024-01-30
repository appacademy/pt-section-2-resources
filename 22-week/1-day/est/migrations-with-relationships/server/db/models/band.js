"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Band extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Band.hasMany(models.Musician, {
                foreignKey: "bandId",
                onDelete: "CASCADE",
            });
        }
    }
    Band.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
        },
        {
            sequelize,
            modelName: "Band",
        }
    );
    return Band;
};

//* Lazy Loading
//? Quicker, "cleaner" syntax
//! One band
// const band = Band.findByPk(someId);
// if (band.albumsSold < 100) return //! I won't end up getting the musicians
//! All related musicians
// const allBandsMusicians = band.getMusicians()

//* Lazy Loading
//? More robust, wordy
//! One band
// const band = Band.findByPk(someId);
//! All related musicians
// const musicians = Musician.findAll({
//     where: {
//         bandId: band.id,
//     },
// });

//* Eager Loading
//? More robust, wordy, BUT all in a single variable
//! One band, and all related musicians
const bandAndMusicians = Band.findAll({
    where: {
        name: "The Falling Box",
    },
    include: Musician,
});
//  albumsSold: {
//     [Op.lte]: 100
// }
