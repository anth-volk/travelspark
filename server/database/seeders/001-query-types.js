'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
	await queryInterface.bulkInsert(
		'Query_Type', 
		[
			{
				query_type: 'Testing query for v0.0.3',
				createdAt: new Date(),
				updatedAt: new Date()
			}
		],
		{}
	);

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
	return await queryInterface.bulkDelete('Query_Type', null, {});
  }
};
