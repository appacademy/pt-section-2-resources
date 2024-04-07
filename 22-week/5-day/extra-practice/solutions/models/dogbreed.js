"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DogBreed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DogBreed.init(
    {
      dogId: DataTypes.INTEGER,
      breedId: DataTypes.INTEGER,
      isACat: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "DogBreed",
    }
  );
  return DogBreed;
};
