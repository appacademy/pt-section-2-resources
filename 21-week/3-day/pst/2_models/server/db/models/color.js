"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Color extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Color.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            hue: DataTypes.STRING,
            rank: DataTypes.INTEGER,
            isPrimary: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
                validate: {
                    isPrimaryColor(value) {
                        const primaryColors = ["red", "blue", "yellow"];

                        if (
                            value &&
                            !primaryColors.includes(this.name.toLowerCase())
                        ) {
                            throw new Error("That is not a creative color");
                        }
                    },
                },
            },
        },
        {
            sequelize,
            modelName: "Color",
        }
    );
    return Color;
};
