"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Instrument extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Instrument.belongsTo(models.Store);
    }
  }
  Instrument.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      storeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Instrument",
      defaultScope: {
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      scopes: {
        //non-default scopes
        keyboard: {
          where: {
            type: 'keyboard'
          }
        },
        string: {
          where: {
            type: "string"
          }
        },
        woodwind: {
          where: {
            type: "woodwind"
          }
        },
        byType(type) {
          return {
            where: {
              type
            }
          }
        },
        byStore(storeId) {
          const { Store } = require("../models");
          return {
            where: {
              storeId
            },
            include: [
              {model: Store}
            ]
          }
        }
      }
    }
  );
  return Instrument;
};
