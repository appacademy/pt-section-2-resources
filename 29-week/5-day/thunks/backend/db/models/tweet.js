"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Tweet extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Tweet.belongsTo(models.User, { foreignKey: "userId" });
			Tweet.hasMany(models.Tweet, {
				foreignKey: "replyId",
				onDelete: "cascade",
				hooks: "true",
			});
      Tweet.belongsTo(models.Tweet, {
        foreignKey: 'replyId'
      });
		}
	}
	Tweet.init(
		{
			userId: DataTypes.INTEGER,
			replyId: DataTypes.INTEGER,
			body: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Tweet",
		}
	);
	return Tweet;
};
