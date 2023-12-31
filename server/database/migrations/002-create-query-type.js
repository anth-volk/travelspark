'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Query_Type', {
			query_type_id: {
				allowNull: false,
				unique: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			query_type: {
				type: Sequelize.STRING
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Query_Type');
	}
};