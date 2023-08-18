'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	class Query extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.hasOne(models.User, {
				sourceKey: 'user_id',
				foreignKey: 'user_id',
				onDelete: 'cascade'
			});
			this.hasOne(models.Query_Type, {
				sourceKey: 'query_type_id',
				foreignKey: 'query_type_id',
				onDelete: 'cascade'
			});
		}
	}
	Query.init({
		query_id: {
			primaryKey: true,
			type: DataTypes.UUID,
			allowNull: false
		},
		user_id: {
			type: DataTypes.UUID,
			allowNull: false
		},
		input_json: {
			type: DataTypes.JSON
		},
		input_full: {
			type: DataTypes.TEXT
		},
		query_type_id: {
			type: DataTypes.INTEGER
		},
		tokens_used: {
			type: DataTypes.BIGINT
		},
		output_full: {
			type: DataTypes.TEXT
		},
	}, {
		sequelize,
		modelName: 'Query',
	});
	return Query;
};