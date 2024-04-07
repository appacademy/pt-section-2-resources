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
      Dog.belongsToMany(models.Breed, {
        through: "DogBreed",
        foreignKey: "dogId",
        otherKey: "breedId",
      });
    }
  }
  Dog.init(
    {
      petName: DataTypes.STRING,
      ownerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Dog",
    }
  );
  return Dog;
};
