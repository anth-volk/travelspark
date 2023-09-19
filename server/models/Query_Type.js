'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	class Query_Type extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Query_Type.init({
		query_type_id: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			allowNull: false,
      autoIncrement: true
		},
		query_type: {
			type: DataTypes.STRING
		}
	}, {
		sequelize,
		modelName: 'Query_Type',
	});
	return Query_Type;
};