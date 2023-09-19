'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Query', {
			query_id: {
				allowNull: false,
				unique: true,
				primaryKey: true,
				type: Sequelize.UUID
			},
			user_id: {
				allowNull: false,
				type: Sequelize.UUID,
				references: {
					model: {
						tableName: 'Users'
					},
					key: 'user_id'
				}
			},
			input_json: {
				type: Sequelize.JSON
			},
			input_full: {
				type: Sequelize.TEXT
			},
			query_type_id: {
				type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Query_Type'
          },
          key: 'query_type_id'
        }
			},
			tokens_used: {
				type: Sequelize.BIGINT
			},
			output_full: {
				type: Sequelize.TEXT
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Queries');
	}
};