"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dog.belongsTo(models.Owner, { foreignKey: "ownerId" });
    }
  }
  Dog.init(
    {
      petName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Dog",
    }
  );
  return Dog;
};
